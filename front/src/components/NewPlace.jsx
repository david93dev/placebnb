import { useState } from "react";
import Perks from "./Perks";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [extras, setExtras] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [maxGuests, setMaxGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do novo lugar
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 px-8">
      {/* title */}
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="ml-2 text-2xl font-bold">
          Título
        </label>
        <input
          id="title"
          type="text"
          placeholder="Digite o título do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* city */}
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="ml-2 text-2xl font-bold">
          Endereço
        </label>
        <input
          id="city"
          type="text"
          placeholder="Digite o endereço do seu anúncio Ex: São Paulo, SP"
          className="rounded-full border border-gray-300 px-4 py-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* photos */}
      <div className="flex flex-col gap-1">
        <label htmlFor="photos" className="ml-2 text-2xl font-bold">
          Fotos
        </label>

        <div className="flex w-full gap-2">
          <input
            id="photos"
            type="text"
            placeholder="Adicione uma foto via link"
            className="grow rounded-full border border-gray-300 px-4 py-2"
            value={photos}
            onChange={(e) => setPhotos(e.target.value)}
          />
          <button className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 font-bold text-gray-700 transition duration-300 hover:bg-gray-200">
            Enviar foto
          </button>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2">
          <label
            htmlFor="file"
            className="flex aspect-square max-w-55 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-gray-300"
          >
            <input type="file" id="file" className="hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </label>
        </div>
      </div>

      {/* description */}
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="ml-2 text-2xl font-bold">
          Descrição
        </label>
        <textarea
          id="description"
          type="textarea"
          placeholder="Digite a descrição do seu anúncio"
          className="min-h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* perks */}

      <div className="flex flex-col gap-1">
        <label htmlFor="perks" className="ml-2 text-2xl font-bold">
          Comodidades
        </label>

        <Perks />
      </div>

      {/* extras */}
      <div className="flex flex-col gap-1">
        <label htmlFor="extras" className="ml-2 text-2xl font-bold">
          Informações adicionais
        </label>
        <textarea
          id="extras"
          type="textarea"
          placeholder="Digite a descrição do seu anúncio"
          className="min-h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2"
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
        />
      </div>

      {/* extras */}
      <div className="flex flex-col gap-1">
        <label htmlFor="extras" className="ml-2 text-2xl font-bold">
          Restrições e Preço
        </label>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6">
          {/* price */}
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="ml-2 text-xl font-semibold">
              Preço
            </label>
            <input
              id="price"
              type="number"
              placeholder="500"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          {/* checkin */}
          <div className="flex flex-col gap-2">
            <label htmlFor="checkin" className="ml-2 text-xl font-semibold">
              Checkin
            </label>
            <input
              id="checkin"
              type="text"
              placeholder="16:00"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>
          {/* checkout */}
          <div className="flex flex-col gap-2">
            <label htmlFor="checkout" className="ml-2 text-xl font-semibold">
              Checkout
            </label>
            <input
              id="checkout"
              type="text"
              placeholder="18:00"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>
          {/* numero de convidados */}
          <div className="flex flex-col gap-2">
            <label htmlFor="guests" className="ml-2 text-xl font-semibold">
              N° Convidados
            </label>
            <input
              id="guests"
              type="number"
              placeholder="12"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button className="bg-primary-400 hover:bg-primary-500 rounded-full px-6 py-3 text-center w-full font-semibold text-white transition-colors duration-300">
          Salvar informações
        </button>
      </div>
    </form>
  );
};

export default NewPlace;
