# Front-end
Repositório de estudos front-end. HTML, CSS, JavaScript

**Semântica**
Durante muitos anos o elemento padrão no HTML era a div, construíamos nosso conteúdo todo baseado nela, e assim nascia a sopa de divs.

Mas em 2014 saiu a quinta versão do HTML, e com ela vieram vários mudanças importantes, como performance e acessibilidade, mas nesse curso introdutório vamos focar na semântica.

A semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div, agora é um article e tem mais significado assim. E temos vários elementos para ressignificar as divs:

**section**

Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

**header**

É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

**article**

Representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

**aside**

É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

**footer**

Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um **footer** são informações de autor e links relacionados.

**h1** a **h6**

Eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito. São utilizados para marcar a importância dos títulos, sendo **h1** o mais importante e **h6** o menos. Uma dica: use apenas um **h1** por página, pois ele representa o objetivo da sua página.
 
**Explicação retirada da plataforma dio.me, do curso bootcamp Carrefur**
 
Já falamos anteriormente sobre os elementos **h1-h6** e, eles são essenciais para nos indicar visualmente a importância e localização de seções de texto na página, mas para textos maiores e mais densos usamos o elemento p.

O **p** representa um parágrafo, mas ele não suporta apenas texto, podemos adicionar imagens, código, vídeos e vários outros tipos de conteúdo dentro dele.

Um outro elemento interessante e extremamente necessário na web é o **a** - que significa anchor/âncora, ele representa um hyperlink, é ele que interliga vários conteúdos e páginas na web.

O elemento a tem vários atributos, mas vamos focar em dois, o **href** e o **target**.

O href representa o hyperlink para onde sua âncora aponta, pode ser uma página do seu ou de outro site, um e-mail e até mesmo um telefone, os dois últimos precisam dos prefixos **mailto:** e **tel:**, respectivamente.

O **target** neste momento vai servir para nos ajudar a abrir nossos links em outra aba do navegador usando o valor _blank.

**Explicação retirada da plataforma dio.me, do curso bootcamp Carrefur**

**Hiperlink**

E em alguma parte deste texto vamos adicionar um hiperlink para outra página e um para nosso e-mail.

Criarei um hyperlink para meu perfil no LinkedIn: adicione o hyperlink no atributo **href** e o valor **_blank** no atributo **target**, assim o link será aberto em outra aba. E em algum outro lugar do texto adicionarei meu e-mail e um link para ele, desta forma:

**a href="mailto:lucas@vilaboim.com" target="_blank">lucas@vilaboim.com /a**

**Imagens**

O elemento **img** é bem simples, contendo apenas 2 atributos próprios, o **src** e o **alt**.

O **src** é obrigatório e guarda o caminho para a imagem que você quer mostrar na página.

O **alt** não é obrigatório mas é altamente recomendado por melhorar a acessibilidade, ele mostra a descrição da imagem caso ela não carregue e leitores de tela usam esse atributo para descrever a imagem para o usuário saber o que ela significa.

**Listas**

**ul** **ol** **li**

Listas servem para agrupar uma coleção de itens, como uma lista de ingredientes ou, como será no nosso caso, uma lista com contatos.

O elemento **ul** cria uma lista não ordenada, onde a ordem dos elementos não é importante, e é representada com pontos, círculos ou quadrados.

O **ol** serve para criar lista ordenadas, nessas a ordem importa, portanto elas são representadas com números, algarismos romanos ou letras.

E o elemento **li** é um item dentro de uma dessas listas. Um **li** pode conter vários tipos de conteúdos, como parágrafos, imagens e até outras listas.

**CSS***

**Box Model**

Possui em ordem,o **content**, o **padding**,o **border** e o **margin**

**Seletores**:
São elementos html, representados no css, como seletores. Existe diferentes tipos de seletores, como por exemplo , **header**, **div**, **nav**, que representam os elementos html. Usar esse tipo de seletor, altera todos os elementos html **header**, **div**, **nav** e por ai vai. Por isso a necessidade de específicar ou agrupar elementos html para a estilização. Através do identificador único **id**, você pode dar uma identificação, não repetível, a um elemento html e criar uma estilização apenas para esse elemento. Outro modo é usando **class** e identificando elementos html com essa classe, podendo assim, criar uma estilização específica para esse grupo de elementos html. 

**Peseudo-classe**: Faz com que um elemento HTML sofra alterações causadas pela interação do usuário, como mover o mouse por cima ou clicar nesse elemento. Um exemplo é o **:hover** logo após um seletor. **div:hover**
