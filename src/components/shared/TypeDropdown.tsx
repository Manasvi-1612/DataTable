import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { useState, startTransition } from "react"
import { useDispatch } from "react-redux"
import { addType } from "@/redux/slices/typeSlice"

type DropdownProps = {
    value?: string,
    onChangeHandler?: (value: string) => void
}

export function TypeDropdown({ value, onChangeHandler }: DropdownProps) {

    const types = useSelector((state: RootState) => state.productsType.data)

    const [productType, setProductType] = useState<string>("")
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const handleAddType = () => {
        if (productType.trim() === "") {
            setOpen(!open)
            return
        }
        dispatch(addType(productType))
        setOpen(!open)
    }

    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger className="max-w-[180px]">
                <SelectValue placeholder="Select Product Type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Product Type</SelectLabel>
                    {types.map((type: string) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger className="w-full flex rounded-sm py-3 pl-8">Add product type</DialogTrigger>
                        <DialogContent className="bg-white">
                            <DialogHeader>
                                <DialogTitle>New Product Type</DialogTitle>
                                <DialogDescription>
                                    <Input type="text" value={productType} className="mt-3" placeholder="Product Type Name" onChange={(e) => setProductType(e.target.value)} />
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                {/* startTransition lets you update the state without blocking the UI. */}
                                <Button type="submit" variant={'outline'} onClick={() => startTransition(handleAddType)}>Add</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
