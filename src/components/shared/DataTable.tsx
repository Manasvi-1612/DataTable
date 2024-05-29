import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import SettingsIcon from "./SettingsIcon"

export function DataTable() {

    const products = useSelector((state: RootState) => state.products.data)

    return (
        <Table>
            <TableCaption>A list of the Products.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Product Name</TableHead>
                    <TableHead>Product Price</TableHead>
                    <TableHead>Product Type</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Sold Units</TableHead>
                    <TableHead><DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                                <SettingsIcon />
                                <span className="sr-only">Toggle columns</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuCheckboxItem checked>Product Name</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked>Price</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked>Type</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked>Stock</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked>Sold Units</DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.type}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.soldUnits}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{products.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}