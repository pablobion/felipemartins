import Image from "next/image";
import nameImg from '../assets/name.png';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--bg-primary)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="relative w-[350px] md:w-[600px] lg:w-[900px] h-24 md:h-32 lg:h-48 mx-auto mb-2">
        <Image
                src={nameImg}
                alt="Nome estilizado Felipe Martins"
                fill
                style={{ objectFit: 'contain' }}
          priority
        />
            </div>
            <p className="text-2xl text-white mb-2">
              Psicólogo Clínico
            </p>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              CRP-12-28726
            </p>
            <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              Auxiliando pessoas a encontrarem equilíbrio emocional e bem-estar através da psicoterapia em Florianópolis
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--bg-accent)] text-center mb-12">
            Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[var(--bg-primary)] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="w-16 h-16 bg-[var(--bg-accent)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                Terapia Individual
              </h3>
              <p className="text-[var(--text-secondary)] text-center">
                Atendimento personalizado focado nas suas necessidades específicas
              </p>
            </div>

            <div className="bg-[var(--bg-primary)] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="w-16 h-16 bg-[var(--bg-accent)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                Acolhimento
              </h3>
              <p className="text-[var(--text-secondary)] text-center">
                Ambiente seguro e confidencial para seu processo terapêutico
              </p>
            </div>

            <div className="bg-[var(--bg-primary)] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="w-16 h-16 bg-[var(--bg-accent)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                Experiência
              </h3>
              <p className="text-[var(--text-secondary)] text-center">
                Profissional qualificado e comprometido com seu bem-estar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contact-section" className="bg-[var(--bg-primary)] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center">
            {/* Coluna da esquerda */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">
                Entre em contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 justify-center">
                  <svg 
                    className="w-6 h-6 text-white mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-white font-medium mb-1">E-mail:</p>
                    <a 
                      href="mailto:felipemartins.c@hotmail.com" 
                      className="text-white hover:underline"
                    >
                      felipemartins.c@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 justify-center">
                  <svg 
                    className="w-6 h-6 text-white mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
        >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-white font-medium mb-1">Telefone:</p>
                    <a 
                      href="tel:+5548991980015" 
                      className="text-white hover:underline"
                    >
                      (48) 99198-0015
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 justify-center">
                  <svg 
                    className="w-6 h-6 text-white mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
        >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-white font-medium mb-1">Localização:</p>
                    <p className="text-white">
                      Florianópolis - Santa Catarina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da direita */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-white mb-6">
                Quer uma ajuda mais rápida?<br />
                Fale com a gente pelo WhatsApp.
              </p>
              <a
                href="https://wa.me/5548991980015"
                className="inline-flex items-center space-x-2 bg-white text-[var(--bg-accent)] font-medium px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
        >
                <svg 
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                <span>Conversar no WhatsApp</span>
        </a>
            </div>
          </div>
    </div>
      </section>
    </main>
  );
}
