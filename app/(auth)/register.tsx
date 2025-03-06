import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router";

const DoneButtonComponent = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={{ marginHorizontal: 20 }}>
      <Text>Hoàn thành</Text>
    </TouchableOpacity>
  );
};

const NextButtonComponent = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={{ marginHorizontal: 20 }}>
      <Text>Tiếp tục</Text>
    </TouchableOpacity>
  );
};

const SkipButtonComponent = ({ ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={{ marginHorizontal: 20 }}>
      <Text>Quay lại</Text>
    </TouchableOpacity>
  );
};

interface DotProps {
  selected: boolean;
}

const DotComponent = ({ selected }: DotProps) => {
  return (
    <View
      style={{
        height: selected ? 10 : 6,
        width: selected ? 20 : 6,
        borderRadius: 6,
        backgroundColor: selected ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)",
        marginHorizontal: 4,
      }}
    ></View>
  );
};

const Register = () => {
  const router = useRouter();

  const onDone = () => {
    router.push("/(auth)/login"); 
  };

  const onSkip = () => {
    router.replace("/");
  };

  return (
    <Onboarding
      onDone={onDone}
      onSkip={onSkip}
      DoneButtonComponent={DoneButtonComponent}
      NextButtonComponent={NextButtonComponent}
      SkipButtonComponent={SkipButtonComponent}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img1.png")}
            />
          ),
          title: "Kiểm soát chi tiêu hiệu quả",
          subtitle:
            "Theo dõi chi tiêu và tận dụng ưu đãi, giúp bạn mua sắm thông minh hơn",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img2.png")}
            />
          ),
          title: "Lên kế hoạch tiết kiệm",
          subtitle:
            "Quản lý tài chính và đạt được mục tiêu tiết kiệm mỗi tháng",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../assets/images/onboarding-img3.png")}
            />
          ),
          title: "Quản lý chi tiêu dễ dàng",
          subtitle:
            "Ghi lại mọi khoản thu chi trong vài giây, giúp bạn tiết kiệm thời gian mỗi ngày",
        },
      ]}
    />
  );
};

export default Register;

const styles = StyleSheet.create({});
