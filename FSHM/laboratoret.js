document.addEventListener("DOMContentLoaded", function () {
    
    const labItems = [
        {
            image: "https://static.vecteezy.com/system/resources/previews/024/577/994/large_2x/modern-office-with-bright-computer-lab-futuristic-design-professional-working-generated-by-ai-photo.jpg",
            title: "Laboratori 1",
            details: "Laboratori i Studenteve te vitit te pare"
        },
        {
            image: "https://st4.depositphotos.com/1019178/19856/i/450/depositphotos_198561552-stock-photo-modern-large-office-interior-design.jpg",
            title: "Laboratori 2",
            details: "Laboratori i Studenteve te vitit te dyte"
        },
        {
            image: "https://st3.depositphotos.com/1000423/13028/i/450/depositphotos_130283828-stock-photo-modern-office-design-mixed-media.jpg",
            title: "Laboratori 3",
            details: "Laboratori i Studenteve te vitit te trete"
        },
    
    ];

    const labContent = document.getElementById("labContent");

  
    labItems.forEach((item) => {
        const labItem = document.createElement("div");
        labItem.classList.add("lab-item");

        labItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h2>${item.title}</h2>
            <p>${item.details}</p>
        `;

        labContent.appendChild(labItem);
    });
});
