import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import './styles.css'

const items = [
    {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
    },
    {
        label: 'Chamados',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/chamados',
    },
    {
        label: 'Gráficos',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/graficos',
    },
    {
        label: 'Relatórios',
        icon: 'pi pi-fw pi-file',
        routerLink: '/relatorios',
    },
    {
        separator: true
    },
    {
        label: 'Novo Chamado',
        className: 'newCall',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/novo-chamado',
    },
]


//const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src=''} height="40" className="mr-2"></img>;
const end = <InputText placeholder="Search" type="text" icon="pi pi-fw pi-search" />;

export default function MenuTopBar(){

    return (
        <>
        <div className='class-navbar' >
            <Menubar model={items} end={end} />
        </div>
         </>
    )

}

