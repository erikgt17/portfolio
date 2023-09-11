import type { NextPage } from 'next'
import Image from 'next/image'
import { AboutStyled } from './style'
import { skills } from '../../utils/data'

const About: NextPage = () => {
    return (
        <AboutStyled id="about" className="container">
            <div>
                <h2>Sobre mi</h2>
                <div>
                    <p>
                        Busco desarrollarme dentro de una empresa que me permita adquirir conocimientos y experiencias,
                        al mismo tiempo que me dé la oportunidad de aportar mis habilidades, entusiasmo y energía para
                        realizarme personal.
                    </p>
                    <br />
                    <p>
                        Actualmente me dedico exclusivamente al desarrollo frontend, poder pero estoy dispuesto a poder
                        aprender y desempe ñarme como full stack
                    </p>
                    <br />
                    <p>
                        Me gustaría poder enseñar a otros miembros del equipo, para poder mejorar mis habilidades de
                        liderazgo.
                    </p>
                </div>
            </div>
            <div>
                <h2>Habilidades</h2>
                <div>
                    {skills.map((skill, i) => (
                        <Image
                            key={i}
                            aria-label={skill.title}
                            title={skill.title}
                            height={50}
                            width={50}
                            src={skill.src}
                            alt={skill.title}
                        />
                    ))}
                </div>
            </div>
        </AboutStyled>
    )
}

export default About
