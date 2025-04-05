import { useEffect } from "react";

export default function useScrollAnimation() {
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in-up");

        // Adiciona a classe "invisible" antes de iniciar a observação
        elements.forEach((element) => element.classList.add("invisible"));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        entry.target.classList.remove("invisible"); // Remove a classe quando aparece
                    }
                });
            },
            { threshold: 0.6 } // Ativa quando 20% do elemento estiver visível
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
}
