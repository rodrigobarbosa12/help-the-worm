# 🪱 A Grande Jornada da Minhoca

Era uma vez uma pequena minhoca que vivia tranquila em seu cantinho de terra.  
Um dia, ela percebeu que o mundo lá fora era muito maior do que ela imaginava.  
Decidida a explorar e conquistar novos horizontes, nossa heroína começou uma jornada cheia de desafios:  
às vezes avançava com entusiasmo, às vezes escorregava um pouco para trás, mas nunca desistia.

No caminho, encontrou sinais de esperança, ganhou forças para continuar e, com muita determinação, alcançou seu objetivo.  
A história dessa minhoca é um lembrete de que **persistência e paciência nos levam longe**.

---

## ✅ Requisitos do Desafio

- [x] Criar um programa onde a minhoca está em um buraco de 20cm de profundidade
- [x] A minhoca sobe 5cm e cai 3cm, com pausa de 1 segundo a cada queda
- [x] Mostrar um quadro amarelo quando ela atingir a metade
- [x] Mostrar um quadro verde quando ela sair do buraco
- [x] Exibir a quantidade de vezes que a minhoca subiu para sair
- [x] Possibilitar que o usuário informe a profundidade, o avanço e o retrocesso

---

## 🎥 Demonstração

👉 Aqui vai um espaço para você colocar o GIF mostrando a minhoca em ação:

![Demo](./demo.gif)

---

## 🚀 Como rodar o projeto

Você pode rodar de duas formas: **direto no terminal** ou usando **Docker**.

### 🖥️ Rodando no terminal

```bash
# Clone o repositório
git clone https://github.com/rodrigobarbosa12/help-the-worm.git

# Acesse a pasta do projeto
cd help-the-worm

# Instale as dependências
yarn install
# ou
npm install

# Rode o projeto
yarn dev
# ou
npm run dev
```

### 🐳 Rodando com Docker

```bash
# Clone o repositório
git clone https://github.com/rodrigobarbosa12/help-the-worm.git

# Acesse a pasta do projeto
cd help-the-worm

# Build da imagem
docker build -t help-the-worm .

# Subindo o container
docker run -p 8080:8080 help-the-worm
```

## ✨ Tecnologias utilizadas

- ⚛️ React
- 🟦 TypeScript
- 🐳 Docker
- 🎨 CSS/Styled Components (ou a que você usou)
