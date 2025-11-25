import Navigation from './Navigation';

const FAQPage = () => {
    const faqs = [
        {
            question: "Como faço para cadastrar uma farmácia?",
            answer: "Vá para a página 'Cadastro de Farmácia' e preencha todos os campos necessários.",
        },
        {
            question: "Como faço para cadastrar um medicamento?",
            answer: "Vá para a página 'Cadastro de Medicamento' e preencha todos os campos necessários.",
        },
    ];

    return (
        <div className="container">
            <Navigation />
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                    <div className="mt-5">
                        <h1>Perguntas Frequentes</h1>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mt-4">
                                <h2>{faq.question}</h2>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;