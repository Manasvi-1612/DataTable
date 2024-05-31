import React from 'react';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import SettingsIcon from './SettingsIcon';
import { Button } from '../ui/button';

type DropdownProps = {
    columnVisibility: {
        "name": boolean,
        "price": boolean,
        "type": boolean,
        "stock": boolean,
        "soldUnits": boolean,
    },
    setColumnVisibility: (columnVisibility: any) => void
};

const Dropdown = ({ columnVisibility, setColumnVisibility }: DropdownProps) => {
    const handleToggle = (key: string) => {
        setColumnVisibility({
            ...columnVisibility,
            [key]: !columnVisibility[key as keyof typeof columnVisibility]
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                    <SettingsIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {Object.keys(columnVisibility).map((key: string) => (
                    <DropdownMenuCheckboxItem
                        key={key}
                        checked={columnVisibility[key as keyof typeof columnVisibility]}
                        onCheckedChange={() => handleToggle(key)}
                    >
                        {key}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Dropdown;
