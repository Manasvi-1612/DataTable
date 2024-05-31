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
import Dropdown from "./Dropdown"
import { useState } from "react"

export function DataTable() {

    const products = useSelector((state: RootState) => state.products.data)

    const selectedType = useSelector((state: RootState) => state.productsType.selectedType);

    const filteredProducts = selectedType === 'All'
        ? products
        : products.filter(product => product.type === selectedType);


    const [columnVisibility, setColumnVisibility] = useState({
        "name": true,
        "price": true,
        "type": true,
        "stock": true,
        "soldUnits": true,
    })


    return (
        <Table>
            <TableCaption>A list of the Products.</TableCaption>
            <TableHeader>
                <TableRow>
                    {columnVisibility["name"] && <TableHead className="w-[100px]">Product Name</TableHead>}
                    {columnVisibility["price"] &&<TableHead>Product Price</TableHead>}
                    {columnVisibility["type"] &&<TableHead>Product Type</TableHead>}
                    {columnVisibility["stock"] &&<TableHead>Current Stock</TableHead>}
                    {columnVisibility["soldUnits"] &&<TableHead>Sold Units</TableHead>}
                    <TableHead>
                        <Dropdown columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility} />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                        {columnVisibility["name"] &&<TableCell className="font-medium">{product.name}</TableCell>}
                        {columnVisibility["price"] &&<TableCell>{product.price}</TableCell>}
                        {columnVisibility["type"] &&<TableCell>{product.type}</TableCell>}
                        {columnVisibility["stock"] &&<TableCell>{product.stock}</TableCell>}
                        {columnVisibility["soldUnits"] &&<TableCell>{product.soldUnits}</TableCell>}
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{filteredProducts.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}