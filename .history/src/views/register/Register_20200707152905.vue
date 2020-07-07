<template>
  <!-- 注册 -->
  <div>
    <div class="All">
      <div class="title">M</div>
      <div class="box">使用 XMall 账号 登录官网</div>
      <Card style="width:320px">
        <div style="text-align:center">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="Name" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="E-mail" prop="mail">
              <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="City" prop="city">
              <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
              </Select>
            </FormItem>
            <FormItem label="Date">
              <Row>
                <Col span="11">
                  <FormItem prop="date">
                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                  </FormItem>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                  <FormItem prop="time">
                    <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                  </FormItem>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="Gender" prop="gender">
              <RadioGroup v-model="formValidate.gender">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="Hobby" prop="interest">
              <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem label="Desc" prop="desc">
              <Input
                v-model="formValidate.desc"
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                placeholder="Enter something..."
              ></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
              <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.All {
  width: 450px;
  height: 600px;
  background: beige;
  left: 400px;
  top: 100px;
  position: relative;
}
.title {
  width: 70px;
  height: 50px;
  font-size: 30px;
  font-weight: 999;
  left: 200px;
  top: 50px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  background: rgb(247, 8, 40);
  position: absolute;
}
.box {
  top: 120px;
  left: 140px;
  position: absolute;
  font-size: 18px;
}
</style>