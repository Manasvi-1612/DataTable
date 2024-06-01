import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { selectRange } from "@/redux/slices/rangeSlice"


type SliderProps = React.ComponentProps<typeof Slider>

export function SliderFilter({ className, ...props }: SliderProps) {

    const range = useSelector((state: RootState) => state.productsRange.selectedRange)

    const dispatch = useDispatch()

    const [value, setValue] = useState<number[] | undefined>([range])

    const handleChange = (value: number[]) => {
        dispatch(selectRange(value[0]))
        setValue(value)
    }

    return (
        <div style={{ padding: '20px', width: '300px' }}>
            <Slider
                defaultValue={value}
                max={1250}
                step={1}
                className={cn("w-[60%]", className)}
                {...props}
                onValueChange={handleChange}
            />
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                MaxPrice Range: {value}
            </div>
        </div>
    )
}
