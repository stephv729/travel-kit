import uploadImages from "./services/cloudinary-service";

export function submitImages(imgArr) {
  return imgArr.map(async (img) => {
    const formData = new FormData();
    formData.append("file", img?.file);
    formData.append("upload_preset", "hackf1hx");
    let uploadedImg;
    try {
      uploadedImg = await uploadImages(formData);
    } catch (error) {
      console.log(error);
    }
    return uploadedImg?.url;
  });
}

export function readMultiFiles(e, indexInicial) {
  const files = e.currentTarget.files;
  const arrayImages = [];
  Object.keys(files).forEach((i) => {
    const file = files[i];
    let url = URL.createObjectURL(file);
    arrayImages.push({
      index: indexInicial,
      name: file.name,
      url,
      file,
    });
    indexInicial++;
  });
  return arrayImages;
}

export function shortDate(dateStr) {
  console.log(dateStr)
  if (!dateStr) return
  const date = new Date(dateStr);
  const parseOptions = { weekday: "short", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", parseOptions).format(date);
}