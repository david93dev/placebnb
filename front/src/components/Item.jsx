const Item = () => {
  return (
    <a href="#" className="flex flex-col gap-2">
      <img
        src="https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2019/05/22/decoracao-para-quarto-de-hotel-em-tons-neutros-com-roupa-de-cama-branca-e-moveis-de-madeira.jpg"
        alt="imagem acomodação"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          O Quarto Standard oferece um ambiente amplo, confortável e
          cuidadosamente planejado para proporcionar uma experiência acolhedora
          desde o primeiro momento, combinando praticidade com detalhes que
          garantem bem-estar ao hóspede; equipado com uma cama de casal
          espaçosa, enxoval de qualidade, iluminação suave e climatização por
          ar-condicionado, o espaço foi pensado para atender tanto quem busca
          descanso quanto quem precisa de um local tranquilo para trabalhar. O
          quarto conta ainda com TV de tela plana com canais a cabo, Wi-Fi de
          alta velocidade, frigobar abastecido, guarda-roupa, mesa de trabalho
          ergonômica e poltrona de apoio, criando um ambiente versátil e
          funcional. O banheiro privativo possui ducha quente de alta pressão,
          espelho amplo, secador de cabelo e kit completo de amenities,
          oferecendo praticidade e conforto ao longo da estadia; ideal para
          viagens a lazer ou negócios, o Quarto Standard reúne comodidade,
          modernidade e todos os recursos necessários para uma permanência
          agradável e relaxante.
        </p>
      </div>
      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
