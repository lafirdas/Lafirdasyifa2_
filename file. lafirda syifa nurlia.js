root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-biru: #348E38;
    --bs-secondary: #525368;
    --bs-success: #198754;
    --bs-birumuda: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-merah: #dc3545;
    --bs-light: #E8F5E9;
    --bs-dark: #122C3D;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))
}

*,
::after,
::before {
    box-sizing: border-box
}

@media (prefers-reduced-motion:no-preference) {
    :root {
        scroll-behavior: smooth
    }
}

body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #525368;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: Jost, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    color: #122c3d
}

.h1,
h1 {
    font-size: calc(1.375rem + 1.5vw)
}

@media (min-width:1200px) {

    .h1,
    h1 {
        font-size: 2.5rem
    }
}

.h2,
h2 {
    font-size: calc(1.325rem + .9vw)
}

@media (min-width:1200px) {

    .h2,
    h2 {
        font-size: 2rem
    }
}

.h3,
h3 {
    font-size: calc(1.3rem + .6vw)
}

@media (min-width:1200px) {

    .h3,
    h3 {
        font-size: 1.75rem
    }
}

.h4,
h4 {
    font-size: calc(1.275rem + .3vw)
}

@media (min-width:1200px) {

    .h4,
    h4 {
        font-size: 1.5rem
    }
}

.h5,
h5 {
    font-size: 1.25rem
}

.h6,
h6 {
    font-size: 1rem
}

p {
    margin-top: 0;
    margin-bottom: 1rem
}

ol {
    padding-left: 2rem
}

ol {
    margin-top: 0;
    margin-bottom: 1rem
}

ol ol {
    margin-bottom: 0
}

b {
    font-weight: bolder
}

a {
    color: #348e38;
    text-decoration: none
}

a:hover {
    color: #2a722d
}

a:not([href]):not([class]),
a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none
}

figure {
    margin: 0 0 1rem
}

img {
    vertical-align: middle
}

table {
    caption-side: bottom;
    border-collapse: collapse
}

caption {
    padding-top: .5rem;
    padding-bottom: .5rem;
    color: #6c757d;
    text-align: left
}

th {
    text-align: inherit;
    text-align: -webkit-match-parent
}

tbody,
td,
th,
tr {
    border-color: inherit;
    border-style: solid;
    border-width: 0
}

button {
    border-radius: 0
}

button:focus:not(:focus-visible) {
    outline: 0
}

button {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

button {
    text-transform: none
}

[role=button] {
    cursor: pointer
}

[list]::-webkit-calendar-picker-indicator {
    display: none
}

[type=button],
[type=reset],
[type=submit],
button {
    -webkit-appearance: button
}

[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled),
button:not(:disabled) {
    cursor: pointer
}

::-moz-focus-inner {
    padding: 0;
    border-style: none
}

::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-year-field {
    padding: 0
}

::-webkit-inner-spin-button {
    height: auto
}

[type=search] {
    outline-offset: -2px;
    -webkit-appearance: textfield
}

::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-color-swatch-wrapper {
    padding: 0
}

::file-selector-button {
    font: inherit
}

::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button
}

iframe {
    border: 0
}

[hidden] {
    display: none !important
}

.display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 700;
    line-height: 1.2
}

@media (min-width:1200px) {
    .display-1 {
        font-size: 5rem
    }
}

.display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 700;
    line-height: 1.2
}

@media (min-width:1200px) {
    .display-2 {
        font-size: 4.5rem
    }
}

.display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 700;
    line-height: 1.2
}

@media (min-width:1200px) {
    .display-3 {
        font-size: 4rem
    }
}

.display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 700;
    line-height: 1.2
}

@media (min-width:1200px) {
    .display-4 {
        font-size: 3.5rem
    }
}

.display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 700;
    line-height: 1.2
}

@media (min-width:1200px) {
    .display-5 {
        font-size: 3rem
    }
}

.display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 700;
    line-height: 1.2
}

@media (min-width:1200px) {
    .display-6 {
        font-size: 2.5rem
    }
}

.img-fluid {
    max-width: 100%;
    height: auto
}

.figure {
    display: inline-block
}

.figure-img {
    margin-bottom: .5rem;
    line-height: 1
}

.figure-caption {
    font-size: .875em;
    color: #6c757d
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-xxl {
    width: 100%;
    padding-right: var(--bs-gutter-x, .75rem);
    padding-left: var(--bs-gutter-x, .75rem);
    margin-right: auto;
    margin-left: auto;
}

@media (min-width:576px) {
    .container {
        max-width: 720px;
        /* Lebih lebar dari sebelumnya */
    }
}

@media (min-width:768px) {

    .container,
    .container-md {
        max-width: 960px;
        /* Lebih lebar dari sebelumnya */
    }
}

@media (min-width:992px) {

    .container,
    .container-lg,
    .container-md {
        max-width: 1280px;
        /* Lebih lebar dari sebelumnya */
    }
}

@media (min-width:1200px) {

    .container,
    .container-lg,
    .container-md {
        max-width: 1440px;
        /* Lebih lebar dari sebelumnya */
    }
}

@media (min-width:1400px) {

    .container,
    .container-lg,
    .container-md,
    .container-xxl {
        max-width: 1720px;
        /* Lebih lebar dari sebelumnya */
    }
}


.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x)/ -2);
    margin-left: calc(var(--bs-gutter-x)/ -2)
}

.row>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x)/ 2);
    padding-left: calc(var(--bs-gutter-x)/ 2);
    margin-top: var(--bs-gutter-y)
}

.col {
    flex: 1 0 0%
}

.kolom-auto {
    flex: 0 0 auto;
    width: auto
}

.kolom-1 {
    flex: 0 0 auto;
    width: 8.33333%
}

.kolom-2 {
    flex: 0 0 auto;
    width: 16.66667%
}

.kolom-3 {
    flex: 0 0 auto;
    width: 25%
}

.kolom-4 {
    flex: 0 0 auto;
    width: 33.33333%
}

.kolom-5 {
    flex: 0 0 auto;
    width: 41.66667%
}

.kolom-6 {
    flex: 0 0 auto;
    width: 50%
}

.kolom-7 {
    flex: 0 0 auto;
    width: 58.33333%
}

.kolom-8 {
    flex: 0 0 auto;
    width: 66.66667%
}

.kolom-9 {
    flex: 0 0 auto;
    width: 75%
}

.kolom-10 {
    flex: 0 0 auto;
    width: 83.33333%
}

.kolom-11 {
    flex: 0 0 auto;
    width: 91.66667%
}

.kolom-12 {
    flex: 0 0 auto;
    width: 100%
}

.g-0 {
    --bs-gutter-x: 0
}

.g-0 {
    --bs-gutter-y: 0
}

.g-1 {
    --bs-gutter-x: .25rem
}

.g-1 {
    --bs-gutter-y: .25rem
}

.g-2 {
    --bs-gutter-x: .5rem
}

.g-2 {
    --bs-gutter-y: .5rem
}

.g-3 {
    --bs-gutter-x: 1rem
}

.g-3 {
    --bs-gutter-y: 1rem
}

.g-4 {
    --bs-gutter-x: 1.5rem
}

.g-4 {
    --bs-gutter-y: 1.5rem
}

.g-5 {
    --bs-gutter-x: 3rem
}

.g-5 {
    --bs-gutter-y: 3rem
}

@media (min-width:768px) {
    .kolom-md {
        flex: 1 0 0%
    }

    .kolom-md-auto {
        flex: 0 0 auto;
        width: auto
    }

    .kolom-md-1 {
        flex: 0 0 auto;
        width: 8.33333%
    }

    .kolom-md-2 {
        flex: 0 0 auto;
        width: 16.66667%
    }

    .kolom-md-3 {
        flex: 0 0 auto;
        width: 25%
    }

    .kolom-md-4 {
        flex: 0 0 auto;
        width: 33.33333%
    }

    .kolom-md-5 {
        flex: 0 0 auto;
        width: 41.66667%
    }

    .kolom-md-6 {
        flex: 0 0 auto;
        width: 50%
    }

    .kolom-md-7 {
        flex: 0 0 auto;
        width: 58.33333%
    }

    .kolom-md-8 {
        flex: 0 0 auto;
        width: 66.66667%
    }

    .kolom-md-9 {
        flex: 0 0 auto;
        width: 75%
    }

    .kolom-md-10 {
        flex: 0 0 auto;
        width: 83.33333%
    }

    .kolom-md-11 {
        flex: 0 0 auto;
        width: 91.66667%
    }

    .kolom-md-12 {
        flex: 0 0 auto;
        width: 100%
    }

    .g-md-0 {
        --bs-gutter-x: 0
    }

    .g-md-0 {
        --bs-gutter-y: 0
    }

    .g-md-1 {
        --bs-gutter-x: .25rem
    }

    .g-md-1 {
        --bs-gutter-y: .25rem
    }

    .g-md-2 {
        --bs-gutter-x: .5rem
    }

    .g-md-2 {
        --bs-gutter-y: .5rem
    }

    .g-md-3 {
        --bs-gutter-x: 1rem
    }

    .g-md-3 {
        --bs-gutter-y: 1rem
    }

    .g-md-4 {
        --bs-gutter-x: 1.5rem
    }

    .g-md-4 {
        --bs-gutter-y: 1.5rem
    }

    .g-md-5 {
        --bs-gutter-x: 3rem
    }

    .g-md-5 {
        --bs-gutter-y: 3rem
    }
}

@media (min-width:992px) {
    .kolom-lg {
        flex: 1 0 0%
    }

    .kolom-lg-auto {
        flex: 0 0 auto;
        width: auto
    }

    .kolom-lg-1 {
        flex: 0 0 auto;
        width: 8.33333%
    }

    .kolom-lg-2 {
        flex: 0 0 auto;
        width: 16.66667%
    }

    .kolom-lg-3 {
        flex: 0 0 auto;
        width: 25%
    }

    .kolom-lg-4 {
        flex: 0 0 auto;
        width: 33.33333%
    }

    .kolom-lg-5 {
        flex: 0 0 auto;
        width: 41.66667%
    }

    .kolom-lg-6 {
        flex: 0 0 auto;
        width: 50%
    }

    .kolom-lg-7 {
        flex: 0 0 auto;
        width: 58.33333%
    }

    .kolom-lg-8 {
        flex: 0 0 auto;
        width: 66.66667%
    }

    .kolom-lg-9 {
        flex: 0 0 auto;
        width: 75%
    }

    .kolom-lg-10 {
        flex: 0 0 auto;
        width: 83.33333%
    }

    .kolom-lg-11 {
        flex: 0 0 auto;
        width: 91.66667%
    }

    .kolom-lg-12 {
        flex: 0 0 auto;
        width: 100%
    }

    .g-lg-0 {
        --bs-gutter-x: 0
    }

    .g-lg-0 {
        --bs-gutter-y: 0
    }

    .g-lg-1 {
        --bs-gutter-x: .25rem
    }

    .g-lg-1 {
        --bs-gutter-y: .25rem
    }

    .g-lg-2 {
        --bs-gutter-x: .5rem
    }

    .g-lg-2 {
        --bs-gutter-y: .5rem
    }

    .g-lg-3 {
        --bs-gutter-x: 1rem
    }

    .g-lg-3 {
        --bs-gutter-y: 1rem
    }

    .g-lg-4 {
        --bs-gutter-x: 1.5rem
    }

    .g-lg-4 {
        --bs-gutter-y: 1.5rem
    }

    .g-lg-5 {
        --bs-gutter-x: 3rem
    }

    .g-lg-5 {
        --bs-gutter-y: 3rem
    }
}

@media (min-width:1400px) {
    .kolom-xxl {
        flex: 1 0 0%
    }

    .kolom-xxl-auto {
        flex: 0 0 auto;
        width: auto
    }

    .kolom-xxl-1 {
        flex: 0 0 auto;
        width: 8.33333%
    }

    .kolom-xxl-2 {
        flex: 0 0 auto;
        width: 16.66667%
    }

    .kolom-xxl-3 {
        flex: 0 0 auto;
        width: 25%
    }

    .kolom-xxl-4 {
        flex: 0 0 auto;
        width: 33.33333%
    }

    .kolom-xxl-5 {
        flex: 0 0 auto;
        width: 41.66667%
    }

    .kolom-xxl-6 {
        flex: 0 0 auto;
        width: 50%
    }

    .kolom-xxl-7 {
        flex: 0 0 auto;
        width: 58.33333%
    }

    .kolom-xxl-8 {
        flex: 0 0 auto;
        width: 66.66667%
    }

    .kolom-xxl-9 {
        flex: 0 0 auto;
        width: 75%
    }

    .kolom-xxl-10 {
        flex: 0 0 auto;
        width: 83.33333%
    }

    .kolom-xxl-11 {
        flex: 0 0 auto;
        width: 91.66667%
    }

    .kolom-xxl-12 {
        flex: 0 0 auto;
        width: 100%
    }

    .g-xxl-0 {
        --bs-gutter-x: 0
    }

    .g-xxl-0 {
        --bs-gutter-y: 0
    }

    .g-xxl-1 {
        --bs-gutter-x: .25rem
    }

    .g-xxl-1 {
        --bs-gutter-y: .25rem
    }

    .g-xxl-2 {
        --bs-gutter-x: .5rem
    }

    .g-xxl-2 {
        --bs-gutter-y: .5rem
    }

    .g-xxl-3 {
        --bs-gutter-x: 1rem
    }

    .g-xxl-3 {
        --bs-gutter-y: 1rem
    }

    .g-xxl-4 {
        --bs-gutter-x: 1.5rem
    }

    .g-xxl-4 {
        --bs-gutter-y: 1.5rem
    }

    .g-xxl-5 {
        --bs-gutter-x: 3rem
    }

    .g-xxl-5 {
        --bs-gutter-y: 3rem
    }
}

.table {
    --bs-table-bg: rgba(0, 0, 0, 0);
    --bs-table-striped-color: #525368;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #525368;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #525368;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: #525368;
    vertical-align: top;
    border-color: #dee2e6
}

.table>:not(caption)>*>* {
    padding: .5rem .5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg)
}

.table>tbody {
    vertical-align: inherit
}

.table>:not(:last-child)>:last-child>* {
    border-bottom-color: currentColor
}

.caption-top {
    caption-side: top
}

.table-active {
    --bs-table-accent-bg: var(--bs-table-active-bg);
    color: var(--bs-table-active-color)
}

.table-secondary {
    --bs-table-bg: #dcdde1;
    --bs-table-striped-bg: #d1d2d6;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #c6c7cb;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #ccccd0;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #c6c7cb
}

.table-light {
    --bs-table-bg: #E8F5E9;
    --bs-table-striped-bg: #dce9dd;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #d1ddd2;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #d7e3d8;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #d1ddd2
}

.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #525368;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: 4px;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
    .btn {
        transition: none
    }
}

.btn:hover {
    color: #525368
}

.btn:focus {
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(52, 142, 56, .25)
}

.btn:disabled {
    pointer-events: none;
    opacity: .65
}

.btn-secondary {
    color: #fff;
    background-color: #525368;
    border-color: #525368
}

.btn-secondary:hover {
    color: #fff;
    background-color: #464758;
    border-color: #424253
}

.btn-secondary:focus {
    color: #fff;
    background-color: #464758;
    border-color: #424253;
    box-shadow: 0 0 0 .25rem rgba(108, 109, 127, .5)
}

.btn-secondary.active,
.btn-secondary:active {
    color: #fff;
    background-color: #424253;
    border-color: #3e3e4e
}

.btn-secondary.active:focus,
.btn-secondary:active:focus {
    box-shadow: 0 0 0 .25rem rgba(108, 109, 127, .5)
}

.btn-secondary:disabled {
    color: #fff;
    background-color: #525368;
    border-color: #525368
}

.btn-light {
    color: #000;
    background-color: #e8f5e9;
    border-color: #e8f5e9
}

.btn-light:hover {
    color: #000;
    background-color: #ebf7ec;
    border-color: #eaf6eb
}

.btn-light:focus {
    color: #000;
    background-color: #ebf7ec;
    border-color: #eaf6eb;
    box-shadow: 0 0 0 .25rem rgba(197, 208, 198, .5)
}

.btn-light.active,
.btn-light:active {
    color: #000;
    background-color: #edf7ed;
    border-color: #eaf6eb
}

.btn-light.active:focus,
.btn-light:active:focus {
    box-shadow: 0 0 0 .25rem rgba(197, 208, 198, .5)
}

.btn-light:disabled {
    color: #000;
    background-color: #e8f5e9;
    border-color: #e8f5e9
}

.btn-link {
    font-weight: 400;
    color: #348e38;
    text-decoration: none
}

.btn-link:hover {
    color: #2a722d
}

.btn-link:disabled {
    color: #6c757d
}

.btn-lg {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    border-radius: 4px
}

.collapse:not(.show) {
    display: none
}



.page-link {
    position: relative;
    display: block;
    color: #348e38;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
    .page-link {
        transition: none
    }
}

.page-link:hover {
    z-index: 2;
    color: #2a722d;
    background-color: #e9ecef;
    border-color: #dee2e6
}

.page-link:focus {
    z-index: 3;
    color: #2a722d;
    background-color: #e9ecef;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(52, 142, 56, .25)
}

.page-item:not(:first-child) .page-link {
    margin-left: -1px
}

.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #348e38;
    border-color: #348e38
}

.page-link {
    padding: .375rem .75rem
}

.page-item:first-child .page-link {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

.page-item:last-child .page-link {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px
}

@keyframes progress-bar-stripes {
    0% {
        background-position-x: 1rem
    }
}

.fotoutama {
    position: relative
}

.fotoutama-inner {
    position: relative;
    width: 100%;
    overflow: hidden
}

.fotoutama-inner::after {
    display: block;
    clear: both;
    content: ""
}

.fotoutama-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    backface-visibility: hidden;
    transition: transform .6s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
    .fotoutama-item {
        transition: none
    }
}

.fotoutama-item.active {
    display: block
}

.active.fotoutama-item-end {
    transform: translateX(100%)
}

.fotoutama-caption {
    position: absolute;
    right: 15%;
    bottom: 1.25rem;
    left: 15%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    color: #fff;
    text-align: center
}

@keyframes spinner-border {
    to {
        transform: rotate(360deg)
    }
}

@keyframes spinner-grow {
    0% {
        transform: scale(0)
    }

    50% {
        opacity: 1;
        transform: none
    }
}

.link-secondary {
    color: #525368
}

.link-secondary:focus,
.link-secondary:hover {
    color: #424253
}

.link-light {
    color: #e8f5e9
}

.link-light:focus,
.link-light:hover {
    color: #edf7ed
}

.sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020
}

@media (min-width:768px) {
    .sticky-md-top {
        position: sticky;
        top: 0;
        z-index: 1020
    }
}

@media (min-width:992px) {
    .sticky-lg-top {
        position: sticky;
        top: 0;
        z-index: 1020
    }
}

@media (min-width:1400px) {
    .sticky-xxl-top {
        position: sticky;
        top: 0;
        z-index: 1020
    }
}

.align-top {
    vertical-align: top !important
}

.align-text-top {
    vertical-align: text-top !important
}

.d-table {
    display: table !important
}

.d-table-row {
    display: table-row !important
}

.d-flex {
    display: flex !important
}

.shadow {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important
}

.shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important
}

.position-sticky {
    position: sticky !important
}

.top-0 {
    top: 0 !important
}

.top-50 {
    top: 50% !important
}

.top-100 {
    top: 100% !important
}

.end-0 {
    right: 0 !important
}

.end-50 {
    right: 50% !important
}

.end-100 {
    right: 100% !important
}

.w-25 {
    width: 25% !important
}

.w-50 {
    width: 50% !important
}

.w-75 {
    width: 75% !important
}

.w-100 {
    width: 100% !important
}

.w-auto {
    width: auto !important
}

.h-25 {
    height: 25% !important
}

.h-50 {
    height: 50% !important
}

.h-75 {
    height: 75% !important
}

.h-100 {
    height: 100% !important
}

.h-auto {
    height: auto !important
}

.flex-row {
    flex-direction: row !important
}

.justify-content-end {
    justify-content: flex-end !important
}

.justify-content-center {
    justify-content: center !important
}

.align-items-end {
    align-items: flex-end !important
}

.align-items-center {
    align-items: center !important
}

.align-content-end {
    align-content: flex-end !important
}

.align-content-center {
    align-content: center !important
}

.mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important
}

.mx-1 {
    margin-right: .25rem !important;
    margin-left: .25rem !important
}

.mx-2 {
    margin-right: .5rem !important;
    margin-left: .5rem !important
}

.mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important
}

.mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important
}

.mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important
}

.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important
}

.my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important
}

.my-1 {
    margin-top: .25rem !important;
    margin-bottom: .25rem !important
}

.my-2 {
    margin-top: .5rem !important;
    margin-bottom: .5rem !important
}

.my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important
}

.my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important
}

.my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important
}

.my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important
}

.mt-0 {
    margin-top: 0 !important
}

.mt-1 {
    margin-top: .25rem !important
}

.mt-2 {
    margin-top: .5rem !important
}

.mt-3 {
    margin-top: 1rem !important
}

.mt-4 {
    margin-top: 1.5rem !important
}

.mt-5 {
    margin-top: 3rem !important
}

.mt-auto {
    margin-top: auto !important
}

.me-0 {
    margin-right: 0 !important
}

.me-1 {
    margin-right: .25rem !important
}

.me-2 {
    margin-right: .5rem !important
}

.me-3 {
    margin-right: 1rem !important
}

.me-4 {
    margin-right: 1.5rem !important
}

.me-5 {
    margin-right: 3rem !important
}

.me-auto {
    margin-right: auto !important
}

.mb-0 {
    margin-bottom: 0 !important
}

.mb-1 {
    margin-bottom: .25rem !important
}

.mb-2 {
    margin-bottom: .5rem !important
}

.mb-3 {
    margin-bottom: 1rem !important
}

.mb-4 {
    margin-bottom: 1.5rem !important
}

.mb-5 {
    margin-bottom: 3rem !important
}

.mb-auto {
    margin-bottom: auto !important
}

.ms-0 {
    margin-left: 0 !important
}

.ms-1 {
    margin-left: .25rem !important
}

.ms-2 {
    margin-left: .5rem !important
}

.ms-3 {
    margin-left: 1rem !important
}

.ms-4 {
    margin-left: 1.5rem !important
}

.ms-5 {
    margin-left: 3rem !important
}

.ms-auto {
    margin-left: auto !important
}

.p-0 {
    padding: 0 !important
}

.p-1 {
    padding: .25rem !important
}

.p-2 {
    padding: .5rem !important
}

.p-3 {
    padding: 1rem !important
}

.p-4 {
    padding: 1.5rem !important
}

.p-5 {
    padding: 3rem !important
}

.px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important
}

.px-1 {
    padding-right: .25rem !important;
    padding-left: .25rem !important
}

.px-2 {
    padding-right: .5rem !important;
    padding-left: .5rem !important
}

.px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important
}

.px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important
}

.px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important
}

.py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important
}

.py-1 {
    padding-top: .25rem !important;
    padding-bottom: .25rem !important
}

.py-2 {
    padding-top: .5rem !important;
    padding-bottom: .5rem !important
}

.py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important
}

.py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important
}

.py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important
}

.pt-0 {
    padding-top: 0 !important
}

.pt-1 {
    padding-top: .25rem !important
}

.pt-2 {
    padding-top: .5rem !important
}

.pt-3 {
    padding-top: 1rem !important
}

.pt-4 {
    padding-top: 1.5rem !important
}

.pt-5 {
    padding-top: 3rem !important
}

.ps-0 {
    padding-left: 0 !important
}

.ps-1 {
    padding-left: .25rem !important
}

.ps-2 {
    padding-left: .5rem !important
}

.ps-3 {
    padding-left: 1rem !important
}

.ps-4 {
    padding-left: 1.5rem !important
}

.ps-5 {
    padding-left: 3rem !important
}

.text-end {
    text-align: right !important
}

.text-center {
    text-align: center !important
}

.text-secondary {
    color: #525368 !important
}

.text-light {
    color: #e8f5e9 !important
}

.text-white {
    color: #fff !important
}

.text-body {
    color: #525368 !important
}

.text-white-50 {
    color: rgba(255, 255, 255, .5) !important
}

.bg-secondary {
    background-color: #525368 !important
}

.bg-light {
    background-color: #e8f5e9 !important
}

.bg-body {
    background-color: #fff !important
}

.bg-putih {
    background-color: #fff !important
}

.rounded {
    border-radius: 4px !important
}

.rounded-0 {
    border-radius: 0 !important
}

.rounded-1 {
    border-radius: 4px !important
}

.rounded-2 {
    border-radius: 4px !important
}

.rounded-3 {
    border-radius: 4px !important
}

.rounded-top {
    border-top-left-radius: 4px !important;
    border-top-right-radius: 4px !important
}

.rounded-end {
    border-top-right-radius: 4px !important;
    border-bottom-right-radius: 4px !important
}

@media (min-width:768px) {
    .d-md-table {
        display: table !important
    }

    .d-md-table-row {
        display: table-row !important
    }

    .d-md-flex {
        display: flex !important
    }

    .flex-md-row {
        flex-direction: row !important
    }

    .justify-content-md-end {
        justify-content: flex-end !important
    }

    .justify-content-md-center {
        justify-content: center !important
    }

    .align-items-md-end {
        align-items: flex-end !important
    }

    .align-items-md-center {
        align-items: center !important
    }

    .align-content-md-end {
        align-content: flex-end !important
    }

    .align-content-md-center {
        align-content: center !important
    }

    .mx-md-0 {
        margin-right: 0 !important;
        margin-left: 0 !important
    }

    .mx-md-1 {
        margin-right: .25rem !important;
        margin-left: .25rem !important
    }

    .mx-md-2 {
        margin-right: .5rem !important;
        margin-left: .5rem !important
    }

    .mx-md-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important
    }

    .mx-md-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important
    }

    .mx-md-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important
    }

    .mx-md-auto {
        margin-right: auto !important;
        margin-left: auto !important
    }

    .my-md-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important
    }

    .my-md-1 {
        margin-top: .25rem !important;
        margin-bottom: .25rem !important
    }

    .my-md-2 {
        margin-top: .5rem !important;
        margin-bottom: .5rem !important
    }

    .my-md-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important
    }

    .my-md-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important
    }

    .my-md-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important
    }

    .my-md-auto {
        margin-top: auto !important;
        margin-bottom: auto !important
    }

    .mt-md-0 {
        margin-top: 0 !important
    }

    .mt-md-1 {
        margin-top: .25rem !important
    }

    .mt-md-2 {
        margin-top: .5rem !important
    }

    .mt-md-3 {
        margin-top: 1rem !important
    }

    .mt-md-4 {
        margin-top: 1.5rem !important
    }

    .mt-md-5 {
        margin-top: 3rem !important
    }

    .mt-md-auto {
        margin-top: auto !important
    }

    .me-md-0 {
        margin-right: 0 !important
    }

    .me-md-1 {
        margin-right: .25rem !important
    }

    .me-md-2 {
        margin-right: .5rem !important
    }

    .me-md-3 {
        margin-right: 1rem !important
    }

    .me-md-4 {
        margin-right: 1.5rem !important
    }

    .me-md-5 {
        margin-right: 3rem !important
    }

    .me-md-auto {
        margin-right: auto !important
    }

    .mb-md-0 {
        margin-bottom: 0 !important
    }

    .mb-md-1 {
        margin-bottom: .25rem !important
    }

    .mb-md-2 {
        margin-bottom: .5rem !important
    }

    .mb-md-3 {
        margin-bottom: 1rem !important
    }

    .mb-md-4 {
        margin-bottom: 1.5rem !important
    }

    .mb-md-5 {
        margin-bottom: 3rem !important
    }

    .mb-md-auto {
        margin-bottom: auto !important
    }

    .ms-md-0 {
        margin-left: 0 !important
    }

    .ms-md-1 {
        margin-left: .25rem !important
    }

    .ms-md-2 {
        margin-left: .5rem !important
    }

    .ms-md-3 {
        margin-left: 1rem !important
    }

    .ms-md-4 {
        margin-left: 1.5rem !important
    }

    .ms-md-5 {
        margin-left: 3rem !important
    }

    .ms-md-auto {
        margin-left: auto !important
    }

    .p-md-0 {
        padding: 0 !important
    }

    .p-md-1 {
        padding: .25rem !important
    }

    .p-md-2 {
        padding: .5rem !important
    }

    .p-md-3 {
        padding: 1rem !important
    }

    .p-md-4 {
        padding: 1.5rem !important
    }

    .p-md-5 {
        padding: 3rem !important
    }

    .px-md-0 {
        padding-right: 0 !important;
        padding-left: 0 !important
    }

    .px-md-1 {
        padding-right: .25rem !important;
        padding-left: .25rem !important
    }

    .px-md-2 {
        padding-right: .5rem !important;
        padding-left: .5rem !important
    }

    .px-md-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important
    }

    .px-md-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important
    }

    .px-md-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important
    }

    .py-md-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .py-md-1 {
        padding-top: .25rem !important;
        padding-bottom: .25rem !important
    }

    .py-md-2 {
        padding-top: .5rem !important;
        padding-bottom: .5rem !important
    }

    .py-md-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important
    }

    .py-md-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important
    }

    .py-md-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important
    }

    .pt-md-0 {
        padding-top: 0 !important
    }

    .pt-md-1 {
        padding-top: .25rem !important
    }

    .pt-md-2 {
        padding-top: .5rem !important
    }

    .pt-md-3 {
        padding-top: 1rem !important
    }

    .pt-md-4 {
        padding-top: 1.5rem !important
    }

    .pt-md-5 {
        padding-top: 3rem !important
    }

    .ps-md-0 {
        padding-left: 0 !important
    }

    .ps-md-1 {
        padding-left: .25rem !important
    }

    .ps-md-2 {
        padding-left: .5rem !important
    }

    .ps-md-3 {
        padding-left: 1rem !important
    }

    .ps-md-4 {
        padding-left: 1.5rem !important
    }

    .ps-md-5 {
        padding-left: 3rem !important
    }

    .text-md-end {
        text-align: right !important
    }

    .text-md-center {
        text-align: center !important
    }
}

@media (min-width:992px) {
    .d-lg-table {
        display: table !important
    }

    .d-lg-table-row {
        display: table-row !important
    }

    .d-lg-flex {
        display: flex !important
    }

    .flex-lg-row {
        flex-direction: row !important
    }

    .justify-content-lg-end {
        justify-content: flex-end !important
    }

    .justify-content-lg-center {
        justify-content: center !important
    }

    .align-items-lg-end {
        align-items: flex-end !important
    }

    .align-items-lg-center {
        align-items: center !important
    }

    .align-content-lg-end {
        align-content: flex-end !important
    }

    .align-content-lg-center {
        align-content: center !important
    }

    .mx-lg-0 {
        margin-right: 0 !important;
        margin-left: 0 !important
    }

    .mx-lg-1 {
        margin-right: .25rem !important;
        margin-left: .25rem !important
    }

    .mx-lg-2 {
        margin-right: .5rem !important;
        margin-left: .5rem !important
    }

    .mx-lg-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important
    }

    .mx-lg-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important
    }

    .mx-lg-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important
    }

    .mx-lg-auto {
        margin-right: auto !important;
        margin-left: auto !important
    }

    .my-lg-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important
    }

    .my-lg-1 {
        margin-top: .25rem !important;
        margin-bottom: .25rem !important
    }

    .my-lg-2 {
        margin-top: .5rem !important;
        margin-bottom: .5rem !important
    }

    .my-lg-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important
    }

    .my-lg-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important
    }

    .my-lg-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important
    }

    .my-lg-auto {
        margin-top: auto !important;
        margin-bottom: auto !important
    }

    .mt-lg-0 {
        margin-top: 0 !important
    }

    .mt-lg-1 {
        margin-top: .25rem !important
    }

    .mt-lg-2 {
        margin-top: .5rem !important
    }

    .mt-lg-3 {
        margin-top: 1rem !important
    }

    .mt-lg-4 {
        margin-top: 1.5rem !important
    }

    .mt-lg-5 {
        margin-top: 3rem !important
    }

    .mt-lg-auto {
        margin-top: auto !important
    }

    .me-lg-0 {
        margin-right: 0 !important
    }

    .me-lg-1 {
        margin-right: .25rem !important
    }

    .me-lg-2 {
        margin-right: .5rem !important
    }

    .me-lg-3 {
        margin-right: 1rem !important
    }

    .me-lg-4 {
        margin-right: 1.5rem !important
    }

    .me-lg-5 {
        margin-right: 3rem !important
    }

    .me-lg-auto {
        margin-right: auto !important
    }

    .mb-lg-0 {
        margin-bottom: 0 !important
    }

    .mb-lg-1 {
        margin-bottom: .25rem !important
    }

    .mb-lg-2 {
        margin-bottom: .5rem !important
    }

    .mb-lg-3 {
        margin-bottom: 1rem !important
    }

    .mb-lg-4 {
        margin-bottom: 1.5rem !important
    }

    .mb-lg-5 {
        margin-bottom: 3rem !important
    }

    .mb-lg-auto {
        margin-bottom: auto !important
    }

    .ms-lg-0 {
        margin-left: 0 !important
    }

    .ms-lg-1 {
        margin-left: .25rem !important
    }

    .ms-lg-2 {
        margin-left: .5rem !important
    }

    .ms-lg-3 {
        margin-left: 1rem !important
    }

    .ms-lg-4 {
        margin-left: 1.5rem !important
    }

    .ms-lg-5 {
        margin-left: 3rem !important
    }

    .ms-lg-auto {
        margin-left: auto !important
    }

    .p-lg-0 {
        padding: 0 !important
    }

    .p-lg-1 {
        padding: .25rem !important
    }

    .p-lg-2 {
        padding: .5rem !important
    }

    .p-lg-3 {
        padding: 1rem !important
    }

    .p-lg-4 {
        padding: 1.5rem !important
    }

    .p-lg-5 {
        padding: 3rem !important
    }

    .px-lg-0 {
        padding-right: 0 !important;
        padding-left: 0 !important
    }

    .px-lg-1 {
        padding-right: .25rem !important;
        padding-left: .25rem !important
    }

    .px-lg-2 {
        padding-right: .5rem !important;
        padding-left: .5rem !important
    }

    .px-lg-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important
    }

    .px-lg-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important
    }

    .px-lg-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important
    }

    .py-lg-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .py-lg-1 {
        padding-top: .25rem !important;
        padding-bottom: .25rem !important
    }

    .py-lg-2 {
        padding-top: .5rem !important;
        padding-bottom: .5rem !important
    }

    .py-lg-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important
    }

    .py-lg-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important
    }

    .py-lg-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important
    }

    .pt-lg-0 {
        padding-top: 0 !important
    }

    .pt-lg-1 {
        padding-top: .25rem !important
    }

    .pt-lg-2 {
        padding-top: .5rem !important
    }

    .pt-lg-3 {
        padding-top: 1rem !important
    }

    .pt-lg-4 {
        padding-top: 1.5rem !important
    }

    .pt-lg-5 {
        padding-top: 3rem !important
    }

    .ps-lg-0 {
        padding-left: 0 !important
    }

    .ps-lg-1 {
        padding-left: .25rem !important
    }

    .ps-lg-2 {
        padding-left: .5rem !important
    }

    .ps-lg-3 {
        padding-left: 1rem !important
    }

    .ps-lg-4 {
        padding-left: 1.5rem !important
    }

    .ps-lg-5 {
        padding-left: 3rem !important
    }

    .text-lg-end {
        text-align: right !important
    }

    .text-lg-center {
        text-align: center !important
    }
}

@media (min-width:1400px) {
    .d-xxl-table {
        display: table !important
    }

    .d-xxl-table-row {
        display: table-row !important
    }

    .d-xxl-flex {
        display: flex !important
    }

    .flex-xxl-row {
        flex-direction: row !important
    }

    .justify-content-xxl-end {
        justify-content: flex-end !important
    }

    .justify-content-xxl-center {
        justify-content: center !important
    }

    .align-items-xxl-end {
        align-items: flex-end !important
    }

    .align-items-xxl-center {
        align-items: center !important
    }

    .align-content-xxl-end {
        align-content: flex-end !important
    }

    .align-content-xxl-center {
        align-content: center !important
    }

    .mx-xxl-0 {
        margin-right: 0 !important;
        margin-left: 0 !important
    }

    .mx-xxl-1 {
        margin-right: .25rem !important;
        margin-left: .25rem !important
    }

    .mx-xxl-2 {
        margin-right: .5rem !important;
        margin-left: .5rem !important
    }

    .mx-xxl-3 {
        margin-right: 1rem !important;
        margin-left: 1rem !important
    }

    .mx-xxl-4 {
        margin-right: 1.5rem !important;
        margin-left: 1.5rem !important
    }

    .mx-xxl-5 {
        margin-right: 3rem !important;
        margin-left: 3rem !important
    }

    .mx-xxl-auto {
        margin-right: auto !important;
        margin-left: auto !important
    }

    .my-xxl-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important
    }

    .my-xxl-1 {
        margin-top: .25rem !important;
        margin-bottom: .25rem !important
    }

    .my-xxl-2 {
        margin-top: .5rem !important;
        margin-bottom: .5rem !important
    }

    .my-xxl-3 {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important
    }

    .my-xxl-4 {
        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important
    }

    .my-xxl-5 {
        margin-top: 3rem !important;
        margin-bottom: 3rem !important
    }

    .my-xxl-auto {
        margin-top: auto !important;
        margin-bottom: auto !important
    }

    .mt-xxl-0 {
        margin-top: 0 !important
    }

    .mt-xxl-1 {
        margin-top: .25rem !important
    }

    .mt-xxl-2 {
        margin-top: .5rem !important
    }

    .mt-xxl-3 {
        margin-top: 1rem !important
    }

    .mt-xxl-4 {
        margin-top: 1.5rem !important
    }

    .mt-xxl-5 {
        margin-top: 3rem !important
    }

    .mt-xxl-auto {
        margin-top: auto !important
    }

    .me-xxl-0 {
        margin-right: 0 !important
    }

    .me-xxl-1 {
        margin-right: .25rem !important
    }

    .me-xxl-2 {
        margin-right: .5rem !important
    }

    .me-xxl-3 {
        margin-right: 1rem !important
    }

    .me-xxl-4 {
        margin-right: 1.5rem !important
    }

    .me-xxl-5 {
        margin-right: 3rem !important
    }

    .me-xxl-auto {
        margin-right: auto !important
    }

    .mb-xxl-0 {
        margin-bottom: 0 !important
    }

    .mb-xxl-1 {
        margin-bottom: .25rem !important
    }

    .mb-xxl-2 {
        margin-bottom: .5rem !important
    }

    .mb-xxl-3 {
        margin-bottom: 1rem !important
    }

    .mb-xxl-4 {
        margin-bottom: 1.5rem !important
    }

    .mb-xxl-5 {
        margin-bottom: 3rem !important
    }

    .mb-xxl-auto {
        margin-bottom: auto !important
    }

    .ms-xxl-0 {
        margin-left: 0 !important
    }

    .ms-xxl-1 {
        margin-left: .25rem !important
    }

    .ms-xxl-2 {
        margin-left: .5rem !important
    }

    .ms-xxl-3 {
        margin-left: 1rem !important
    }

    .ms-xxl-4 {
        margin-left: 1.5rem !important
    }

    .ms-xxl-5 {
        margin-left: 3rem !important
    }

    .ms-xxl-auto {
        margin-left: auto !important
    }

    .p-xxl-0 {
        padding: 0 !important
    }

    .p-xxl-1 {
        padding: .25rem !important
    }

    .p-xxl-2 {
        padding: .5rem !important
    }

    .p-xxl-3 {
        padding: 1rem !important
    }

    .p-xxl-4 {
        padding: 1.5rem !important
    }

    .p-xxl-5 {
        padding: 3rem !important
    }

    .px-xxl-0 {
        padding-right: 0 !important;
        padding-left: 0 !important
    }

    .px-xxl-1 {
        padding-right: .25rem !important;
        padding-left: .25rem !important
    }

    .px-xxl-2 {
        padding-right: .5rem !important;
        padding-left: .5rem !important
    }

    .px-xxl-3 {
        padding-right: 1rem !important;
        padding-left: 1rem !important
    }

    .px-xxl-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important
    }

    .px-xxl-5 {
        padding-right: 3rem !important;
        padding-left: 3rem !important
    }

    .py-xxl-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .py-xxl-1 {
        padding-top: .25rem !important;
        padding-bottom: .25rem !important
    }

    .py-xxl-2 {
        padding-top: .5rem !important;
        padding-bottom: .5rem !important
    }

    .py-xxl-3 {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important
    }

    .py-xxl-4 {
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important
    }

    .py-xxl-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important
    }

    .pt-xxl-0 {
        padding-top: 0 !important
    }

    .pt-xxl-1 {
        padding-top: .25rem !important
    }

    .pt-xxl-2 {
        padding-top: .5rem !important
    }

    .pt-xxl-3 {
        padding-top: 1rem !important
    }

    .pt-xxl-4 {
        padding-top: 1.5rem !important
    }

    .pt-xxl-5 {
        padding-top: 3rem !important
    }

    .ps-xxl-0 {
        padding-left: 0 !important
    }

    .ps-xxl-1 {
        padding-left: .25rem !important
    }

    .ps-xxl-2 {
        padding-left: .5rem !important
    }

    .ps-xxl-3 {
        padding-left: 1rem !important
    }

    .ps-xxl-4 {
        padding-left: 1.5rem !important
    }

    .ps-xxl-5 {
        padding-left: 3rem !important
    }

    .text-xxl-end {
        text-align: right !important
    }

    .text-xxl-center {
        text-align: center !important
    }
}

:root {
    --biru: #6968DF;
    --secondary: #525368;
    --light: #CED8E1;
    --dark: #122C3D
}

.h1,
.h2,
h1,
h2 {
    font-weight: 700 !important
}

.h3,
.h4,
h3,
h4 {
    font-weight: 600 !important
}

.h5,
.h6,
h5,
h6 {
    font-weight: 500 !important
}

.btn {
    transition: .5s;
    font-weight: 500
}



.fotoutama-caption {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #3b3b3b6c;
    z-index: 1
}

@media (max-width:768px) {
    #header-fotoutama .fotoutama-item {
        position: relative;
        min-height: 450px
    }

    #header-fotoutama .fotoutama-item img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover
    }
}

@media (min-width:991.98px) {
    .kotaktigaatas {
        position: relative;
        margin-top: -80px;
        z-index: 1
    }
}

.footer {
    color: var(--light);
    background: #072a19
}

.footer a {
    color: #fff
}

.footer a:hover {
    color: var(--biru)
}

/* CSS untuk Carousel */
.carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.carousel-slide {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-item {
    min-width: 100%;
    height: 100%;
    position: relative;
    transition: opacity 1s ease;
}

.carousel-item img {
    width: 100%;
    display: block;
}

.carousel-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.carousel-caption {
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
    /* Background gelap semi transparan untuk teks */
    padding: 15px;
    border-radius: 8px;
    max-width: 80%;
    /* Batasi lebar teks */
}

/* Ukuran teks default */
.carousel-caption h1 {
    font-size: 5vw;
    /* Ukuran font berdasarkan lebar viewport */
    margin-bottom: 10px;
}

.carousel-caption p {
    font-size: 2.5vw;
    /* Ukuran font berdasarkan lebar viewport */
}

/* Navigasi carousel */
.carousel-control-prev,
.carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
    cursor: pointer;
    font-size: 2em;
    border-radius: 50%;
}

.carousel-control-prev {
    left: 10px;
}

.carousel-control-next {
    right: 10px;
}

/* Animasi tombol kontrol saat hover */
.carousel-control-prev:hover,
.carousel-control-next:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

/* Media Queries untuk Responsivitas */
@media (max-width: 768px) {
    .carousel-caption h1 {
        font-size: 6vw;
        /* Ukuran font lebih kecil pada layar kecil */
    }

    .carousel-caption p {
        font-size: 3vw;
        /* Ukuran font lebih kecil pada layar kecil */
    }
}

@media (max-width: 480px) {
    .carousel-caption h1 {
        font-size: 8vw;
        /* Ukuran font lebih besar pada layar ekstra kecil */
    }

    .carousel-caption p {
        font-size: 4vw;
        /* Ukuran font lebih besar pada layar ekstra kecil */
    }
}

.card {
    background-color: #f8f9fa;
    /* Warna latar belakang card */
    border-radius: 10px;
    /* Membuat sudut card melengkung */
    padding: 20px;
    /* Ruang dalam card */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    /* Shadow untuk efek elegan */
}

.card-body h1 {
    color: #333;
    /* Warna teks heading */
}

/* Styling untuk Jam Digital */
.clock-widget {
    font-family: 'Courier New', Courier, monospace;
    background: #1e90ff;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.time-display {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 5px;
    margin-bottom: 10px;
}

.date-widget {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 10px;
    color: #f0f0f0;
}

iframe.rounded {
    border: 2px solid #1e90ff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
    background-color: #f8f9fa;
    /* Warna latar belakang card */
    border-radius: 10px;
    /* Membuat sudut card melengkung */
    padding: 20px;
    /* Ruang dalam card */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    /* Shadow untuk efek elegan */
}

.card-body h1 {
    color: #333;
    /* Warna teks heading */
}

.contact-link {
    font-size: 18px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-link i {
    font-size: 20px;
    margin-right: 10px;
}

.contact-link:hover {
    color: #007bff;
    /* Warna saat di-hover */
}

.list-unstyled {
    list-style-type: none;
    /* Menghilangkan dot */
    padding: 0;
    /* Menghilangkan padding default */
    margin: 0;
    /* Menghilangkan margin default */
}

form {
    max-width: 100%;
    margin-top: 20px;
}

.form-label {
    font-weight: bold;
    color: #333;
}

.form-control {
    width: 100%;
    /* Menjadikan input full-width */
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 10px 15px;
    font-size: 16px;
    color: #333;
    transition: all 0.3s ease;
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

textarea.form-control {
    resize: vertical;
}

.btn-primary {
    width: 100%;
    /* Menjadikan tombol full-width */
    background-color: #007bff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #0056b3;
}

/* Styling untuk navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    color: black;
  }
  
  .menu {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .menu li {
    display: inline;
  }
  
  .menu a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .menu a:hover {
    color: #f39c12;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  
  h1 {
    font-size: 20px;
  }
/* Menu toggle untuk responsif */
.menu-toggle {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
    z-index: 1001; /* Toggle tetap terlihat di atas menu */
  }
  
  .bar {
    width: 25px;
    height: 3px;
    background-color: black;
  }
  
  /* Responsif: Menu toggle muncul di perangkat mobile */
  @media screen and (max-width: 768px) {
    .menu {
      display: none; /* Menyembunyikan menu secara default */
      width: 100%;
      background-color: #fff;
      position: absolute;
      top: 50px;
      left: 0;
      padding: 10px 0;
      text-align: center;
      z-index: 1000; /* Menu berada di atas konten lainnya */
      flex-direction: column; /* Menyusun item menu secara vertikal */
    }
  
    .menu li {
      margin: 10px 0;
    }
  
    .menu.active {
      display: flex; /* Menampilkan menu ketika toggle diklik */
    }
  
    .menu-toggle {
      display: flex; /* Memunculkan toggle di perangkat mobile */
    }
  
    .logo h1 {
      font-size: 18px;
    }
  }
  
  /* Dropdown Menu */
.dropdown {
    position: relative;
}

.dropdown-content {
    display: none; /* Menyembunyikan dropdown secara default */
    position: absolute;
    top: 100%; /* Mengatur posisi dropdown di bawah item utama */
    left: 0; /* Mengatur posisi dropdown sejajar ke kiri */
    background-color: #fff;
    min-width: 200px; /* Lebar minimum untuk dropdown */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Menambahkan bayangan */
    border-radius: 5px; /* Membuat sudut dropdown lebih halus */
    overflow: hidden; /* Menghindari konten dropdown keluar */
    z-index: 10;
    padding: 5px 0; /* Memberikan jarak vertikal */
}

.dropdown-content li a {
    color: black;
    padding: 10px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease; /* Efek halus saat hover */
}

.dropdown-content li a:hover {
    background-color: #575757; /* Warna hover untuk item dropdown */
}

.dropdown:hover .dropdown-content {
    display: block; /* Menampilkan dropdown ketika di-hover */
}
