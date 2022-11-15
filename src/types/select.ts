interface SelectItem {
    key: string;
    value: any;
}

interface SelectWrapperProps {
    id: string;
    label: string;
    value: any;
    selectValues: SelectItem[];
    onChange: (x: any) => void;
}

export type {SelectItem, SelectWrapperProps};