export const downloadFile = (text, name, type, id) => {
  const element = document.getElementById(id);
  const file = new Blob([text], {type: type});
  element.href = URL.createObjectURL(file);
  element.download = name;
}
