import React from 'react';
import './FilterButton.css';


interface FilterButtonProps {
    description: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ description }) => {
    
    return (
        <>
            <div className='filter-button'>
                <button>{description}
                <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_80_664)">
                    <rect x="4" width="122" height="122" rx="25" fill="#003459"/>
                    <path d="M23.9333 32.7124H24.3499C24.9901 35.4078 26.4503 37.7979 28.4997 39.5049C30.5491 41.2119 33.0709 42.1387 35.6667 42.1387C38.2624 42.1387 40.7842 41.2119 42.8336 39.5049C44.883 37.7979 46.3432 35.4078 46.9835 32.7124H106.067C106.845 32.7124 107.591 32.3812 108.141 31.7918C108.691 31.2024 109 30.4029 109 29.5693C109 28.7357 108.691 27.9363 108.141 27.3468C107.591 26.7574 106.845 26.4263 106.067 26.4263H46.9835C46.3432 23.7308 44.883 21.3408 42.8336 19.6338C40.7842 17.9267 38.2624 17 35.6667 17C33.0709 17 30.5491 17.9267 28.4997 19.6338C26.4503 21.3408 24.9901 23.7308 24.3499 26.4263H23.9333C23.1554 26.4263 22.4093 26.7574 21.8592 27.3468C21.309 27.9363 21 28.7357 21 29.5693C21 30.4029 21.309 31.2024 21.8592 31.7918C22.4093 32.3812 23.1554 32.7124 23.9333 32.7124ZM35.6667 23.2832C36.827 23.2832 37.9612 23.6519 38.926 24.3426C39.8908 25.0333 40.6427 26.0151 41.0868 27.1637C41.5308 28.3124 41.647 29.5763 41.4206 30.7957C41.1942 32.0151 40.6355 33.1352 39.815 34.0143C38.9946 34.8934 37.9492 35.4921 36.8112 35.7347C35.6732 35.9772 34.4936 35.8527 33.4216 35.377C32.3496 34.9012 31.4333 34.0955 30.7887 33.0617C30.1441 32.028 29.8 30.8126 29.8 29.5693C29.8 27.9021 30.4181 26.3032 31.5183 25.1244C32.6185 23.9455 34.1107 23.2832 35.6667 23.2832ZM106.067 57.8569H105.65C105.01 55.1615 103.55 52.7715 101.5 51.0644C99.4509 49.3574 96.9291 48.4307 94.3333 48.4307C91.7376 48.4307 89.2158 49.3574 87.1664 51.0644C85.117 52.7715 83.6568 55.1615 83.0165 57.8569H23.9333C23.1554 57.8569 22.4093 58.1881 21.8592 58.7775C21.309 59.367 21 60.1664 21 61C21 61.8336 21.309 62.633 21.8592 63.2225C22.4093 63.8119 23.1554 64.1431 23.9333 64.1431H83.0165C83.6568 66.8385 85.117 69.2285 87.1664 70.9356C89.2158 72.6426 91.7376 73.5693 94.3333 73.5693C96.9291 73.5693 99.4509 72.6426 101.5 70.9356C103.55 69.2285 105.01 66.8385 105.65 64.1431H106.067C106.845 64.1431 107.591 63.8119 108.141 63.2225C108.691 62.633 109 61.8336 109 61C109 60.1664 108.691 59.367 108.141 58.7775C107.591 58.1881 106.845 57.8569 106.067 57.8569ZM94.3333 67.2861C93.173 67.2861 92.0388 66.9175 91.074 66.2267C90.1092 65.536 89.3573 64.5542 88.9132 63.4056C88.4692 62.257 88.353 60.993 88.5794 59.7736C88.8058 58.5542 89.3645 57.4342 90.185 56.555C91.0054 55.6759 92.0508 55.0772 93.1888 54.8346C94.3268 54.5921 95.5064 54.7166 96.5784 55.1924C97.6504 55.6681 98.5667 56.4739 99.2113 57.5076C99.8559 58.5414 100.2 59.7567 100.2 61C100.2 62.6672 99.5819 64.2661 98.4817 65.445C97.3815 66.6238 95.8893 67.2861 94.3333 67.2861ZM106.067 89.2876H76.3168C75.6765 86.5922 74.2164 84.2021 72.167 82.4951C70.1176 80.7881 67.5958 79.8613 65 79.8613C62.4042 79.8613 59.8824 80.7881 57.833 82.4951C55.7836 84.2021 54.3235 86.5922 53.6832 89.2876H23.9333C23.1554 89.2876 22.4093 89.6187 21.8592 90.2082C21.309 90.7976 21 91.5971 21 92.4307C21 93.2643 21.309 94.0637 21.8592 94.6532C22.4093 95.2426 23.1554 95.5737 23.9333 95.5737H53.6832C54.3235 98.2692 55.7836 100.659 57.833 102.366C59.8824 104.073 62.4042 105 65 105C67.5958 105 70.1176 104.073 72.167 102.366C74.2164 100.659 75.6765 98.2692 76.3168 95.5737H106.067C106.845 95.5737 107.591 95.2426 108.141 94.6532C108.691 94.0637 109 93.2643 109 92.4307C109 91.5971 108.691 90.7976 108.141 90.2082C107.591 89.6187 106.845 89.2876 106.067 89.2876ZM65 98.7168C63.8397 98.7168 62.7054 98.3481 61.7407 97.6574C60.7759 96.9667 60.0239 95.9849 59.5799 94.8363C59.1359 93.6876 59.0197 92.4237 59.2461 91.2043C59.4724 89.9849 60.0312 88.8648 60.8516 87.9857C61.6721 87.1066 62.7174 86.5079 63.8555 86.2653C64.9935 86.0228 66.1731 86.1473 67.2451 86.623C68.3171 87.0988 69.2333 87.9045 69.878 88.9383C70.5226 89.972 70.8667 91.1874 70.8667 92.4307C70.8667 94.0979 70.2486 95.6968 69.1484 96.8756C68.0481 98.0545 66.5559 98.7168 65 98.7168Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_80_664" x="0" y="0" width="130" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_80_664"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_80_664" result="shape"/>
                    </filter>
                    </defs>
                    </svg>

                </button>
            </div>
        </>
    )
}

export default FilterButton
