import { useEffect, useState } from "react";
import { BiImages } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";
import { ICON_SIZE } from "../../constants/sizes";
import {
  ImagePickerButtonStyled,
  ImagePickerDisplayItemCloseButtonWrapperStyled,
  ImagePickerDisplayItemImageStyled,
  ImagePickerDisplayItemStyled,
  ImagePickerDisplayWrapperStyled,
  ImagePickerWrapperStyled,
} from "../../styled_components/common/ImagePickerStyled";

type ImagePickerProps = {
  onImagePicked: Function;
  initialImages: string[];
};

type PreviewImage = {
  url: string;
  name: string;
};

const ImagePicker = (props: ImagePickerProps) => {
  const mapUrlToPreviewImageType = (images: string[]) => {
    return images.map((e) => {
      return { url: e, name: e };
    });
  };

  const [previewImages, setPreviewImages] = useState<PreviewImage[]>(
    mapUrlToPreviewImageType(props.initialImages)
  );
  const [pickedImages, setPickedImages] = useState<File[]>([]);
  const [urlImages, setUrlImages] = useState<string[]>([
    ...props.initialImages,
  ]);

  useEffect(() => {
    props.onImagePicked(urlImages, pickedImages);
  }, [urlImages, pickedImages]);

  return (
    <ImagePickerWrapperStyled>
      <ImagePickerButtonStyled htmlFor="fileInput">
        <BiImages size={ICON_SIZE} />
      </ImagePickerButtonStyled>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => {
          let filesCastedForPreview = Array.from(e.target.files!).map((pf) => {
            return {
              url: URL.createObjectURL(pf),
              name: pf.name,
            };
          });
          setPickedImages([
            ...pickedImages,
            ...Array.from(e.target.files!).map((e) => e),
          ]);
          setPreviewImages([...previewImages, ...filesCastedForPreview]);
        }}
      />
      {previewImages.length > 0 && (
        <ImagePickerDisplayWrapperStyled>
          {previewImages.map((e) => (
            <ImagePickerDisplayItemStyled
              onClick={() => {
                setPreviewImages(previewImages.filter((pi) => pi !== e));
                setUrlImages(urlImages.filter((ui) => ui !== e.url));
                setPickedImages(
                  pickedImages?.filter((pi) => pi.name !== e.name)
                );
              }}
            >
              <ImagePickerDisplayItemImageStyled src={e.url} />
              <ImagePickerDisplayItemCloseButtonWrapperStyled>
                <RiCloseCircleFill size={ICON_SIZE} />
              </ImagePickerDisplayItemCloseButtonWrapperStyled>
            </ImagePickerDisplayItemStyled>
          ))}
        </ImagePickerDisplayWrapperStyled>
      )}
    </ImagePickerWrapperStyled>
  );
};

export default ImagePicker;
