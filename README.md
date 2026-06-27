# 🔢 Tabuada Dinâmica Moderna

Uma versão modernizada e semântica do clássico projeto de Tabuada do curso de JavaScript do **Curso em Vídeo** (Prof. Gustavo Guanabara). O projeto foi refatorado para seguir os padrões atuais de desenvolvimento web, focando em acessibilidade, semântica estrutural e design responsivo.

---

## 🚀 Melhorias Aplicadas (Diferenciais do Projeto)

Diferente do layout tradicional, esta versão foi construída pensando nas boas práticas de mercado:

* **Formulário Semântico (`<form>`):** Permite que o usuário gere a tabuada tanto clicando no botão quanto simplesmente apertando a tecla **Enter** no teclado, melhorando a experiência do usuário (UX).
* **Validação Nativa HTML5:** Uso do atributo `required` para impedir envios vazios diretamente pelo navegador, reduzindo código JavaScript desnecessário.
* **JavaScript Moderno:** Substituição de seletores antigos por `document.querySelector` e isolamento de escopo para manipulação de eventos limpa (removendo atributos invasivos como `onclick` do HTML).
* **Design Fluido (UI/UX):** Layout construído com Flexbox, cantos suavizados, fontes modernas do Google Fonts (*Inter*), efeitos visuais de clique/hover e leitura facilitada estilo "zebra" no painel de resultados.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Estruturação semântica)
* **CSS3** (Estilização moderna e layout responsivo)
* **JavaScript (ES6+)** (Manipulação de DOM e lógica de repetição)

---

## 🧠 Lógica e Estrutura do Código

O coração do projeto utiliza uma função de tratamento para captura dos dados e um laço de repetição (`for`) para renderizar os resultados dinamicamente dentro de um elemento `<select>`:

```javascript
// Exemplo do fluxo lógico principal
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    let num = setValor(numm); // Converte e isola o valor do input
    resposta.innerHTML = '';  // Limpa o histórico anterior

    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option');
        item.text = `${num} x ${c} = ${num * c}`;
        resposta.appendChild(item);
    }
});
````

## 📦 Como Rodar o Projeto Localmente
Clone este repositório para a sua máquina:

Bash
git clono
Navegue até a pasta do projeto.

Abra o arquivo index.html diretamente em seu navegador ou utilize a extensão Live Server no VS Code para rodar o servidor local.

🧑‍💻 Autor
Desenvolvido por Samuel Gilvan 🚀
