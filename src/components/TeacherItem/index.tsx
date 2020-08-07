import React from 'react';
import whatsappIcon from '../../assests/images/icons/whatsapp.svg';


import './styles.css'

function TeacherItem() {
    return (<article className="teacher-item">
        <header>
            <img src="https://pbs.twimg.com/profile_images/908291212377026560/MI5fKVk9_400x400.jpg" alt="Avner Marra" />
            <div>
                <strong>Avner Marra</strong>
                <span>Física</span>
            </div>
        </header>

        <p>
            Professor aleatorio que está aleatoriamente ensinando essa matéria.
                        <br /><br />
                        A aleatoriedade das cosias é bastante aleatória o que deixa tudo aleatoriamente aleatório.
                    </p>

        <footer>
            <p>
                Preço/hora
                            <strong>R$50,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato.
                        </button>

        </footer>

    </article>
    )
}

export default TeacherItem;

