import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Pricing({title,price,content}) {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            {title}
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>¥</Text>
            <Text fontSize={'4xl'} fontWeight={800}>
              {price}
            </Text>
            <Text color={'gray.500'}>/1ページ</Text>
          </Stack>
        </Stack>
        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          {title === "Webサイト制作" ? 
          <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.400" />
            1ページ追加+3000円
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.400" />
            JavaScriptも対応しています
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.400" />
            既存ページ一部コーディング修正3000円~
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.400" />
            ページコーディング作成　１ページ（極小規模） ⇒ 4500円～
          </ListItem>
        </List>
           : 
           <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              主にLaravel
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              JavaScriptも対応しています
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              既存ページ一部コーディング修正3000円~
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              ページコーディング作成　１ページ（極小規模） ⇒ 4500円～
            </ListItem>
          </List>
          }

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
              詳細
          </Button>
        </Box>
      </Box>
    </Center>
  );
}