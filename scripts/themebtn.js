const colors = ['#ffccc6', '#da7e81', '#f7dfd1', '#a2d2ff', '#cdb4db', '#ffafcc'
    , '#bde0fe', '#a2d2ff', '#ff99c8', '#faedcd', '#c8b6ff', '#8eecf5', '#809bce', '#aaf683', '#f7d6e0'
    , '#fcee9c', '#e6e6fa', '#fcf6bd', '#fdfd96'
];
let colorIndex = 0;

document.getElementById("color-changing-btn")
    .addEventListener('click', function () {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });