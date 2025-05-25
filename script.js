function showLove() {
    const message = document.getElementById("secret-message");
    message.style.display = "block";

    createHearts(10);
}

function showLove() {
    const message = document.getElementById("secret-message");
    message.style.display = "block";

    createHearts(20); // เพิ่มจำนวนหัวใจให้เยอะขึ้น
}

function createHearts(count) {
    const container = document.getElementById("hearts-container");
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`; // กระจายเต็มความกว้างหน้าจอ
        heart.style.top = `${-30 - Math.random() * 20}px`; // เริ่มต้นเหนือจอเล็กน้อย (ข้างบน)
        heart.style.animationDelay = `${i * 0.15}s`;
        container.appendChild(heart);

        // ลบหัวใจหลังแอนิเมชันจบ
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}

