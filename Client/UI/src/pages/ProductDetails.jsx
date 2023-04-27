import React from 'react'
import NavbarOne from '../components/NavbarOne';
import Footer from '../components/Footer';
import ResultCard from '../components/ResultCard';
import { Center, Grid, Container, SimpleGrid, Group, Image, Text, Button, Accordion, Card, Stack } from '@mantine/core';
import { useNavigate } from 'react-router';

const ProductDetails = () => {
  
  const navigate = useNavigate();

  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <NavbarOne />
      </div>

      <Center>
        <h1 className='sub_head_text'>
          Product Details:<br className='max-md:hidden' />
        </h1>
      </Center>

      <Center maw={1100} pt={30} pb={10} mx="auto">
        <Grid cols={2} mx="auto">

        

          <Grid.Col span={5}>
            <Card miw={240} mih={240} withBorder>
              <Image miw={240} mih={240} mx="auto" radius="md" src="https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-1-1647434835.jpg?dim=320x320&dpr=1&q=100" alt="Random image" />
            </Card>
          </Grid.Col>


          {/* here we start name price and add to cart section */}
          <Grid.Col span={7}>
            <Card withBorder pl={40}>
              <Stack align="flex-start" justify="flex-start" spacing="xs" h={300}>
                <Text fz="xl">Ecosprin 75mg Strip Of 14 Tablets</Text>
                <Text c="dimmed">By a Certain vendor</Text>
                <Text fz="lg">14 Tablet(s) in Strip</Text>
                <Button variant="light" color="green">
                  Tsh 13,000 <Text c="Red" pl={10}>15% OFF</Text>
                </Button>
                <Text fz="xs">Extra small infromation to be added</Text>
                <button className='green_btn'>
                BUY NOW
                </button>
                <Text fz="sm" fw={500}>Delivery by Today, 5:00 pm - 10:00 pm</Text>

              </Stack>
            </Card>

          </Grid.Col>

        </Grid>

      </Center>


      {/* decription and product summary */}

      <Center maw={900} pt={30} pb={10} mx="auto">

        <Card pl={30} w={900} withBorder>
          <Accordion defaultValue="Description">
            <Accordion.Item value="Description">
              <Accordion.Control fw={700} fz="xl" >Ecosprin 75 MG Description </Accordion.Control>
              <Accordion.Panel>Ecosprin 75 tablet is an antiplatelet medicine. It is used to prevent the risk of heart attacks, stroke and angina. It is also used in patients who have had angioplasty. Blood clots can limit or block the passage of blood to essential organs, resulting in a heart attack or stroke.

                Angina is a type of heart-related chest pain that occurs when there is reduced blood flow to the heart. A heart attack is a condition in which the blood supply to the heart is blocked, usually by a blood clot. A stroke occurs when the blood vessel that supplies blood to the brain is blocked or bursts and leaks.

                Ecosprin 75 tablet contains aspirin (low dose) as the active ingredient. It slows down blood clotting by preventing the platelets from sticking to one another. This helps to decrease the formation of blood clots within the blood vessels which reduces the risk of angina, heart attack and stroke. The tablets Sprin 75mg, Asa 75mg, Ascad 75mg, and Alpyrin 75mg also include aspirin (low dose).

                Take Ecosprin 75 tablets in the exact dose and duration as prescribed by your doctor. Do not take more than the recommended dose. Do not stop taking this medicine on your own. Before starting this medicine, inform your doctor if you have high blood pressure, lung disease, stomach ulcer, blood clotting problems, heavy menstrual bleeding, gout or if you recently had a stroke.

                You should inform your doctor if you are pregnant, planning a pregnancy or breastfeeding and about your detailed medical history. Also, inform the doctor about all other medicines and supplements you are taking.

                While taking Ecosprin 75 tablets, you can incorporate certain lifestyle modifications to boost your health, such as reducing smoking and alcohol intake, regular exercise and eating a healthy balanced diet rich in fruits and vegetables.</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="Uses">
              <Accordion.Control fw={700} fz="xl">Uses</Accordion.Control>
              <Accordion.Panel>
                Uses of Ecosprin 75 MG
                For prevention of heart attack, clot-related stroke (ischemic), heart conditions like stable or unstable angina (chest pain).</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="Contraindications">
              <Accordion.Control fw={700} fz="xl">Contraindications </Accordion.Control>
              <Accordion.Panel>

                <li> If you are allergic to aspirin or other ingredients of Ecosprin 75 tablet.</li>
                <li>If you have an active bleeding or clotting disorder like haemophilia and low platelet count.</li>
                <li>If you have a history of ulcers or bleeding in the stomach or small intestine.</li>
                <li>If you have gout, liver or kidney disorder or bleeding in the brain.</li>
                <li>If you are pregnant (last three months) or breastfeeding.</li>
                <li>Taking medicines for cancer or rheumatoid arthritis-like methotrexate.</li>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="Side effects">
              <Accordion.Control fw={700} fz="xl">Side effects</Accordion.Control>
              <Accordion.Panel>
                <li> Indigestion</li>
                <li>Nausea</li>
                <li>Vomiting</li>
                <li>Diarrhoea</li>
                <li>Increased risk of bleeding </li>
              </Accordion.Panel>
            </Accordion.Item>

          </Accordion>

          <Text fz="md"></Text>

        </Card>


      </Center>

      <Center pt={30}>
        <Text fz="xl" fw={700}>Other suggestions For you:</Text>
      </Center>

      <Center maw={900} pt={30} pb={10} mx="auto">
        <SimpleGrid cols={4}>
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </SimpleGrid>
      </Center>


      <Footer />
    </main>
  )
}

export default ProductDetails