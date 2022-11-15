enum Color {
    black_and_white = "black and white",
    black = "black",
    white = "white",
    yellow = "yellow",
    orange = "orange",
    red = "red",
    purple = "purple",
    magenta = "magenta",
    green = "green",
    teal = "teal",
    blue = "blue"
}

enum Orientation {
    landscape = "landscape",
    portrait = "portrait",
    squarish = "squarish"
}

interface Filters {
    color?: Color;
    orientation?: Orientation;
}

interface FilterBarProps {
    value: Filters;
    onChange: (x: Filters) => void;
}

export {Color, Orientation};
export type {Filters, FilterBarProps};