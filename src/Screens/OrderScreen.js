import { Box, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderIterm from "../Components/OrderIterm";
import OrderModel from "../Components/OrderModel";

function OrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="INFORMACION DE ENVIO"
            success
            subTitle="Shipping: SOYAPANGO"
            text="Metodo de pago: PayPal"
            icon={
              <FontAwesome5
                name="Envio Rapido"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="ENVIADO A"
            subTitle="Address:"
            danger
            text="Aqui va la direccion"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Iterm */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderIterm />
        {/* Total */}
        <OrderModel />
      </Box>
    </Box>
  );
}

export default OrderScreen;
