import { Controller, useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea"; // Assuming there's a Textarea component

export function ProductMutationModal({ isOpen, onClose, updateMode }) {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      category: "",
      brand: "",
      price: "",
      discount: "",
      stock: "",
      thumbnail: "",
      image: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };

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
          <div className="grid gap-5 py-4">
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3">
                <Label className="text-right">Name*</Label>
                <Input type="text" required {...register("name")} />
              </div>
              <div className="col-span-2">
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
                <Input type="number" {...register("price")} required />
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
                <Label>Thumbnail Url*</Label>
                <Input type="url" {...register("thumbnail")} required />
              </div>
              <div className="col-span-2">
                <Label>Image Url</Label>
                <Input type="url" {...register("image")} />
              </div>
            </div>
            <div>
              <Label>Description</Label>
              <Textarea {...register("description")} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
