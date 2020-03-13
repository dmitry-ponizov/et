export type Props = Readonly<ExceptionsType>;

interface ExceptionsType {
    exceptions: {code: string, description: string}[]
}
