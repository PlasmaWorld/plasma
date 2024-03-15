import { useRef, useState } from "react";
import ReactCrop, { makeAspectCrop, centerCrop } from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import setCanvasPreview from "./setCanvasPreview"; // Ensure this path is correct

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ImageCropper2 = ({ closeModal, updateAvatar }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState(); // Keep it undefined to not set initial crop
  const [error, setError] = useState("");

  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgSrc(reader.result?.toString() || "");
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    if (width < MIN_DIMENSION || height < MIN_DIMENSION) {
      setError("Image must be at least 150 x 150 pixels.");
      return;
    }
    setError(""); // Clear previous errors if any
    const initialCrop = makeAspectCrop(
      {
        unit: '%',
        width: 50 // Set initial crop width to 50%
      },
      ASPECT_RATIO,
      width,
      height
    );
    setCrop(centerCrop(initialCrop, width, height));
  };

  return (
    <>
      <label className="block mb-3 w-fit">
        <span className="sr-only">Choose profile photo</span>
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:bg-gray-700 file:text-sky-300 hover:file:bg-gray-600"
        />
      </label>
      {error && <p className="text-red-400 text-xs">{error}</p>}
      {imgSrc && (
        <div className="flex flex-col items-center">
          <ReactCrop
            src={imgSrc}
            crop={crop}
            onImageLoaded={onImageLoad}
            onChange={(newCrop) => setCrop(newCrop)}
            circularCrop
            keepSelection
            aspect={ASPECT_RATIO}
            minWidth={MIN_DIMENSION}
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={imgSrc}
              style={{ maxHeight: "70vh" }}
            />
          </ReactCrop>
          <button
            className="text-white font-mono text-xs py-2 px-4 rounded-2xl mt-4 bg-sky-500 hover:bg-sky-600"
            onClick={() => {
              // Use setCanvasPreview to draw the cropped image on the canvas
              setCanvasPreview(
                imgRef.current,
                previewCanvasRef.current,
                crop
              );
              // Then, create a data URL from the canvas and use it to update the avatar
              const croppedImageUrl = previewCanvasRef.current.toDataURL();
              updateAvatar(croppedImageUrl); // Pass the data URL to the updateAvatar function
              closeModal(); // Close the modal after updating the avatar
            }}
          >
            Crop Image
          </button>
        </div>
      )}
      <canvas
        ref={previewCanvasRef}
        style={{ display: "none", width: "100%", height: "auto" }}
      />
    </>
  );
};

export default ImageCropper2;
