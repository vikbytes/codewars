function alphanumeric(string) {
  const regex = new RegExp("^[A-Za-z0-9]+$", "g");
  return regex.test(string);
}
