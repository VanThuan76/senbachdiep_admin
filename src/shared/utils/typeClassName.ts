import { HTMLAttributes } from 'react';

// Định nghĩa một interface cho phần tử <div>
export interface DivProps extends HTMLAttributes<HTMLDivElement> {}

// Định nghĩa một interface cho phần tử <button>
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

// Định nghĩa một interface cho phần tử <input>
export interface InputProps extends HTMLAttributes<HTMLInputElement> {}

// Định nghĩa một interface cho phần tử <a> (liên kết)
export interface AnchorProps extends HTMLAttributes<HTMLAnchorElement> {}

// Định nghĩa một interface cho phần tử <img> (hình ảnh)
export interface ImgProps extends HTMLAttributes<HTMLImageElement> {}

// Định nghĩa một interface cho phần tử <ul> (danh sách không sắp xếp)
export interface UlProps extends HTMLAttributes<HTMLUListElement> {}

// Định nghĩa một interface cho phần tử <ol> (danh sách có sắp xếp)
export interface OlProps extends HTMLAttributes<HTMLOListElement> {}

// Định nghĩa một interface cho phần tử <li> (mục danh sách)
export interface LiProps extends HTMLAttributes<HTMLLIElement> {}

// Định nghĩa một interface cho phần tử <label> (nhãn)
export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

// Định nghĩa một interface cho phần tử <form> (biểu mẫu)
export interface FormProps extends HTMLAttributes<HTMLFormElement> {}

// Định nghĩa một interface cho phần tử <select> (hộp chọn)
export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {}

// Định nghĩa một interface cho phần tử <textarea> (ô văn bản)
export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {}

// Định nghĩa một interface cho phần tử <p>
export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

// Định nghĩa các interfaces cho các phần tử <h1> đến <h3>
export interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {}
export interface Heading2Props extends HTMLAttributes<HTMLHeadingElement> {}
export interface Heading3Props extends HTMLAttributes<HTMLHeadingElement> {}
