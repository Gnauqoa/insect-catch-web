const register = {
  vi: {
    title: "Đăng ký tài khoản",
    email: "Email",
    password: "Mật khẩu",
    name: "Tên đầy đủ",
    first_name: "Họ",
    last_name: "Tên",
    birth: "Ngày sinh",
    confirm_text1: "Tôi đồng ý với ",
    confirm_text2: "Điều khoản dịch vụ",
    confirm_text3: "và ",
    confirm_text4: "chính sách bảo mật",
    register_button: "Đăng ký",
    login_message: "Đã có tài khoản?",
    login_message2: "Đăng nhập ngay",
    request_message: {
      409: "Tài khoản đã tồn tại",
      201: "Tạo tài khoản thành công",
      500: "Người dùng phải đủ 18 tuổi",
    },
    message: {
      email: "Email không đúng",
      password:
        "Password phải dài ít nhất 8 kí tự, gồm viết hoa, viết thường và số",
      name: "Name không thể trống",
    },
  },
  en: {
    title: "Sign up to app",
    password: "Password",
    name: "Full name",
    first_name: "First name",
    last_name: "Last name",
    birth: "Birth",
    confirm_text1: "By continuing, you agree to ",
    confirm_text2: "Terms of Service",
    confirm_text3: "and acknowledge",
    confirm_text4: "Privacy Policy",
    register_button: "Register",
    login_message: "Already have an account?",
    login_message2: "Login",
  },
  request_message: {
    409: "Account already exist",
    201: "Create account success",
    500: "User must older than 18",
  },
  message: {
    email: "Email is not valid",
    password:
      "Password length must be longer than 8, have 1 uppercase, 1 lowercase and 1 number",
    name: "Name can't be empty",
  },
};

export default register;
