export function getProvinces() {
  return fetch('/api/local').then((resp) => resp.json());
}
