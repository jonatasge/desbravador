import { Container, Title } from "@/components/atoms";
import { Search } from "@/components/molecules";

export const HomePage = () => {
  return (
    <Container className="flex items-center justify-center h-screen text-center">
      <div>
        <Title className="my-2">Encontre os repositórios mais populares!</Title>
        <Search
          className="mt-4"
          label={{ children: "Digite o nome de usuário" }}
          input={{ placeholder: "jonatasge" }}
        />
      </div>
    </Container>
  );
};
