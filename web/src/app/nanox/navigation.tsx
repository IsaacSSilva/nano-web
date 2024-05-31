import { authAutozrization } from "../api/auth/session"
import { Navigation } from '../../components/nav/navigation';


export const Menu = async () => {

    const auth = await authAutozrization()

    return (
        <>
            {
                auth ? (
                    <Navigation.root>
                        <Navigation.loging.menu />
                        <Navigation.loging.user user={auth}/>
                    </Navigation.root>

                ) : (
                    <Navigation.root>
                        <Navigation.noLoging.menu />
                        <Navigation.noLoging.user />
                    </Navigation.root>
                )

            } 
        </>
        
    )
}