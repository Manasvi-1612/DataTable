import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { startTransition, useState } from "react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { TypeDropdown } from "./TypeDropdown"
import { useDispatch } from "react-redux"
import { addProduct } from "@/redux/slices/productsSlice"

const ProductSchema = z.object({
  name: z.string().trim().min(3, 'Name must be at least 3 characters'),
  type: z.string().min(1, 'Please select a type'),
  price: z.preprocess((val: any) => parseInt(val), z.number().min(1)),
  stock: z.preprocess((val: any) => parseInt(val), z.number()),
  soldUnits: z.preprocess((val: any) => parseInt(val), z.number()),
})

export function AddProduct() {

  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const initialValues = {
    name: "",
    type: "",
    price: 0,
    stock: 0,
    soldUnits: 0
  }

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: initialValues
  })

  const handleSubmit = (values: z.infer<typeof ProductSchema>) => {
    try {
      dispatch(addProduct({ ...values, id: '' }))
      form.reset()
      setOpen(!open)
    } catch (error) {
      console.log(error)
      setOpen(!open)
    }
  }



  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add product details
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-4">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Novel - Fiction" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="grid gap-4">
                      <FormLabel>Product Type</FormLabel>
                      <FormControl>
                        <TypeDropdown onChangeHandler={field.onChange} value={field.value} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="grid gap-4">
                      <FormLabel>Product Price</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="650" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem className="grid gap-4">
                      <FormLabel>Current Stock</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="100" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="soldUnits"
                  render={({ field }) => (
                    <FormItem className="grid gap-4 col-span-3">
                      <FormLabel>Sold Units</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="60" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>

      </DialogContent>
    </Dialog>
  )
}
