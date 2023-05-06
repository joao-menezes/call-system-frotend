import { Card } from 'primereact/card';
import './styles.css'


const randomNumber = (Math.random() * 100).toFixed(0)
const openCalls = (Math.random() * 100).toFixed(0)

const fakeCalls = [
    {
        id: 1,
        title: 'Erro no sistema',
        description: 'O sistema está apresentando erro ao tentar cadastrar um novo usuário',
        status: 'Aberto',
        date: '10/10/2021',  
    },
    {
        id: 2,
        title: 'Erro na impressora',
        description: 'A impressora não está imprimindo',
        status: 'Aberto',
        date: '10/10/2021',
    },
]

export default function ContentCards() {
    return (
        <>
            <Card>
                <h1>Quantidade total</h1>
                <div className="open-calls">
                    {randomNumber}
                </div>
            </Card>

            <Card>
            <h1>Meus chamados</h1>
                <div className='my-calls'>
                    {fakeCalls.map((call) => (
                        <div   key={call.id}>
                            <h2>{call.title}</h2>
                            <p>{call.description}</p>
                            <p>{call.status}</p>
                            <p>{call.date}</p>
                        </div>
                    ))}
                </div>
            </Card>

            <Card>
            <h1>Chamados em aberto</h1>
                <div className="open-calls">
                    {openCalls}
                </div>
            </Card>

        </>
    )
}