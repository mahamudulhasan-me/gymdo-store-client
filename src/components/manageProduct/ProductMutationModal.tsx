/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddProductMutation } from "../../redux/features/product/productApiSlice";
import { useUploadImageMutation } from "../../redux/features/uploadImgbb/imagebbApiSlice";
import { IProduct } from "../../types/product.type";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PrimaryLoader from "../ui/loader/PrimaryLoader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
interface IProductMutationModalProps {
  isOpen: boolean;
  onClose: () => void;
  updateMode?: boolean;
}
export function ProductMutationModal({
  isOpen,
  onClose,
  updateMode,
}: IProductMutationModalProps) {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      category: "",
      subcategory: "",
      brand: "",
      price: 0,
      discount: 0,
      stock: 0,
      thumbnail: "",
      image: "",
      description: "",
    },
  });
  const [
    uploadImage,
    {
      isLoading: isUploading,
      // isSuccess: isUploaded,
      isError: isUploadError,
      error: uploadError,
    },
  ] = useUploadImageMutation();
  const [
    addProduct,
    {
      isLoading: isAddingProduct,
      isSuccess: isAddedProduct,
      isError: isAddProductError,
      error: addProductError,
    },
  ] = useAddProductMutation();

  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    const thumbnailFormData = new FormData();
    thumbnailFormData.append("image", data.thumbnail[0]);

    const imageFormData = new FormData();
    imageFormData.append("image", data.image[0]);

    try {
      const thumbnailResponse = await uploadImage(thumbnailFormData).unwrap();
      const imageResponse = await uploadImage(imageFormData).unwrap();

      const productData = {
        ...data,
        thumbnail: thumbnailResponse.data.url,
        image: imageResponse.data.url,
        price: Number(data.price),
        discount: Number(data.discount),
        stock: Number(data.stock),
      };

      addProduct(productData);
    } catch (err) {
      console.error("Failed to upload images: ", err);
    }
  };

  useEffect(() => {
    if (isAddedProduct) {
      toast("Product added successfully");
      onClose();
      reset();
    }
  }, [isAddedProduct, onClose, reset]);

  useEffect(() => {
    if (isUploadError) {
      toast(
        `Failed to upload image-${(uploadError as any).data.error.message}`
      );
    } else if (isAddProductError) {
      toast((addProductError as any).data.message);
    }
  }, [isUploadError, isAddProductError, uploadError, addProductError]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {updateMode ? "Update Product" : "Add Product"}
          </DialogTitle>
          <DialogDescription>
            {updateMode
              ? "Update the product details. Click save to update the product."
              : "Add a new product to your inventory. Fill in the required details and click save to add the product."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          {(isUploading || isAddingProduct) && <PrimaryLoader />}

          <div className="grid gap-5 py-4">
            <>
              <div>
                <Label className="text-right">Name*</Label>
                <Input type="text" required {...register("name")} />
              </div>
            </>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-right">Category*</Label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full py-3">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label className="text-right">Subcategory*</Label>
                <Controller
                  name="subcategory"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full py-3">
                        <SelectValue placeholder="Select Subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label className="text-right">Brand*</Label>
                <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full py-3">
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label>Price*</Label>
                <Input
                  type="number"
                  {...register("price", { valueAsNumber: true })}
                  required
                />
              </div>
              <div>
                <Label>Discount</Label>
                <Input type="number" {...register("discount")} />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3">
              <div>
                <Label>Stock*</Label>
                <Input type="number" {...register("stock")} required />
              </div>
              <div className="col-span-2">
                <Label>Thumbnail*</Label>
                <Input type="file" {...register("thumbnail")} required />
              </div>
              <div className="col-span-2">
                <Label>Image</Label>
                <Input type="file" {...register("image")} />
              </div>
            </div>
            <div>
              <Label>Description</Label>
              <Textarea {...register("description")} />
            </div>
          </div>
          <DialogFooter>
            <Button disabled={isAddingProduct || isUploading} type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
