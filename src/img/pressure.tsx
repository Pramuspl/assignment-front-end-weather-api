import * as React from "react";

function PressureIcon({ title }: { title?: string }) {
  return (
    <svg viewBox="0 0 512 512">
      {title ? <title>{title}</title> : null}
      <path d="M257 0C117.105 0 0 113.025 0 255c0 141.19 116.449 257 257 257 142.13 0 255-117.257 255-257C512 114.061 397.951 0 257 0zm0 482.2C131.832 482.2 29.8 380.168 29.8 255 29.8 130.935 131.832 29.8 257 29.8c124.065 0 225.2 101.135 225.2 225.2 0 125.168-101.135 227.2-225.2 227.2z" />
      <path d="M257 60C149.21 60 60 147.491 60 255c0 52.603 20.817 103.589 57.114 139.886 5.853 5.854 15.356 5.857 21.213 0l21.265-21.265c5.857-5.858 5.857-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0l-10.151 10.151C106.889 336.72 93.676 304.164 90.663 270H105c8.284 0 15-6.716 15-15s-6.716-15-15-15H90.697c3.129-34.135 16.816-65.304 37.812-90.277l9.87 9.87c5.857 5.857 15.355 5.858 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-9.791-9.791C175.229 107.505 207.083 93.76 242 90.674V105c0 8.284 6.716 15 15 15s15-6.716 15-15V90.689c33.219 3.008 63.624 15.9 88.248 35.709l-129.301 91.907C217.831 227.629 210 241.346 210 255c0 1.025.038 2.043.113 3.053C211.815 281.088 232.594 300 257 300c14.542 0 28.257-7.082 36.694-18.948l91.907-129.301c19.809 24.624 32.702 55.03 35.71 88.249H407c-8.284 0-15 6.716-15 15s6.716 15 15 15h14.334c-3.021 34.114-16.252 66.65-37.617 92.503l-10.096-10.096c-5.858-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213l21.207 21.208c5.854 5.853 15.356 5.858 21.213 0C431.162 358.495 452 307.529 452 255c0-107.503-87.39-195-195-195zm12.242 203.671A15.05 15.05 0 01257 270c-8.738 0-17-7.29-17-15 0-3.782 3.347-8.702 8.328-12.243l72.316-51.402-51.402 72.316z" />
      <path d="M287 362h-62c-24.813 0-45 20.187-45 45s20.187 45 45 45h62c24.813 0 45-20.187 45-45s-20.187-45-45-45zm0 60h-62c-8.271 0-15-6.729-15-15s6.729-15 15-15h62c8.271 0 15 6.729 15 15s-6.729 15-15 15z" />
    </svg>
  );
}

export default PressureIcon;