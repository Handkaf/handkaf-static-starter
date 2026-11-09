import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../public/js/main.js', import.meta.url), 'utf8');
function setup({ mobile = false, dark = false, stored = null, blocked = false } = {}) {
  const element = () => ({ hidden: true, attrs: {}, listeners: {}, textContent: '', setAttribute(key, value) { this.attrs[key] = value; }, addEventListener(type, fn) { this.listeners[type] = fn; }, focus() { this.focused = true; } });
  const theme = element(), menu = element(), nav = element(), year = element();
  const root = { dataset: {} };
  const small = { matches: mobile, addEventListener(type, fn) { this.change = fn; } };
  const scheme = { matches: dark, addEventListener(type, fn) { this.change = fn; } };
  const listeners = {};
  let saved = stored;
  const document = { documentElement: root, querySelector: (selector) => ({ '.theme-toggle': theme, '.menu-toggle': menu, '#navigation': nav })[selector], querySelectorAll: () => [year], addEventListener: (type, fn) => { listeners[type] = fn; } };
  vm.runInNewContext(source, { document, window: { matchMedia: (query) => query.includes('720') ? small : scheme }, localStorage: { getItem() { if (blocked) throw Error(); return saved; }, setItem(key, value) { if (blocked) throw Error(); saved = value; } } });
  return { theme, menu, nav, root, small, scheme, listeners, year, saved: () => saved };
}
test('mobile menu opens, closes on Escape, and restores keyboard focus', () => {
  const ui = setup({ mobile: true });
  assert.equal(ui.nav.hidden, true);
  assert.equal(ui.menu.hidden, false);
  ui.menu.listeners.click();
  assert.equal(ui.nav.hidden, false);
  assert.equal(ui.menu.attrs['aria-expanded'], 'true');
  ui.listeners.keydown({ key: 'Escape' });
  assert.equal(ui.nav.hidden, true);
  assert.equal(ui.menu.focused, true);
});
test('menu closes after link activation and desktop navigation remains visible', () => {
  const ui = setup({ mobile: true });
  ui.menu.listeners.click();
  ui.nav.listeners.click({ target: { closest: () => ({}) } });
  assert.equal(ui.nav.hidden, true);
  ui.small.matches = false; ui.small.change();
  assert.equal(ui.nav.hidden, false);
  assert.equal(ui.menu.hidden, true);
  assert.equal(ui.menu.attrs['aria-expanded'], 'false');
});
test('theme respects system settings and persists a user override', () => {
  const ui = setup({ dark: true });
  assert.equal(ui.theme.attrs['aria-pressed'], 'true');
  ui.theme.listeners.click();
  assert.equal(ui.root.dataset.theme, 'light');
  assert.equal(ui.saved(), 'light');
  assert.equal(ui.theme.attrs['aria-pressed'], 'false');
});
test('blocked storage still allows theme and navigation; invalid saved values are ignored', () => {
  const ui = setup({ blocked: true });
  ui.theme.listeners.click();
  assert.equal(ui.root.dataset.theme, 'dark');
  assert.equal(ui.nav.hidden, false);
  assert.equal(setup({ stored: 'invalid' }).root.dataset.theme, undefined);
  assert.equal(setup({ stored: 'dark' }).theme.attrs['aria-pressed'], 'true');
});
test('system theme changes update the control and copyright year is current', () => {
  const ui = setup(); ui.scheme.matches = true; ui.scheme.change();
  assert.equal(ui.theme.attrs['aria-pressed'], 'true');
  assert.equal(ui.year.textContent, String(new Date().getFullYear()));
});
