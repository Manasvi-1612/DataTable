import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useDispatch } from "react-redux"
import { selectType } from "@/redux/slices/typeSlice"

const Filter = () => {

    const types = useSelector((state: RootState) => state.productsType.data)
    const dispatch = useDispatch()

    const onSelectType = (value: string) => {
        try {
            dispatch(selectType(value))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Select onValueChange={(value: string) => onSelectType(value)}>
            <SelectTrigger className="max-w-[180px]">
                <SelectValue placeholder="Select Product type" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="All">All</SelectItem>

                {types.map((type) => (
                    <SelectItem value={type} key={type}>
                        {type}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default Filter