import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [lastname, setLastName] = useState('')
    const [firstname, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ lastname, firstname, email, password, password_confirmation: passwordConfirmation, setErrors })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </a>
                    </Link>
                }>
                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Lastame */}
                    <div>
                        <Label htmlFor="lastname">Nom</Label>

                        <Input
                            id="lastname"
                            type="text"
                            value={lastname}
                            className="block mt-1 w-full"
                            onChange={event => setLastName(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Firstname */}
                    <div>
                        <Label htmlFor="firstname">Prénom</Label>

                        <Input
                            id="firstname"
                            type="text"
                            value={firstname}
                            className="block mt-1 w-full"
                            onChange={event => setFirstName(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Mot de passe</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation">
                            Confirmez votre mot de passe
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="flex items-center justify-around mt-4">
                        <Link href="/login">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Déjà inscrit ?
                            </a>
                        </Link>

                        <Button className="ml-4">S'inscrire</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
