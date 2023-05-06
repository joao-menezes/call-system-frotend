import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function LoginScreen() {
	return(
		<>

			<InputText placeholder="Nome de Usuario" type="text" icon="pi pi-fw pi-user" />
			<InputText placeholder="Senha" type="password" icon="pi pi-fw pi-password" />

			<Button label="Login"/>
		</>
	)
}