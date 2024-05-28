
# What is this Custom Hooks ?

A Custom Hook is actually a comprehensive JavaScript and Typescript function and can contain other functions. Their names usually start with ‘use’. What are the advantages of creating a Custom Hook? Firstly, they abstract the logical functions that repeat in ReactJS or NextJS components and make them reusable. This makes your code cleaner and more organised. Also, custom Hooks allow you to share logical functions between different components. For example, if you want to use the same network status control in different components, you can abstract this function as a custom Hook and reuse it in each component

#### 1) `useCustomDebounce`



useCustomDebounce is a custom Hook commonly used in React. This Hook helps to delay functions or status updates for a certain period of time. It is especially useful in scenarios such as network requests.


![useDebounce](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/ce1c4a0b-795a-4321-82fb-72058c43d965)


Example:

![usedebounce and useState combine](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/ae977ce8-8430-45fc-a35e-7e1f1c4036e7)




#### 2)  `useCustomState`

useState, React’te yaygın olarak kullanılan bir özel Hook’tur. Bu Hook, bileşenlerin durumu yönetmek için kullanılır. Durum, bileşenlerin içindeki verilerin değişebilirliğini temsil eder


![useState](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/e8ca6f65-8ebe-4e50-a162-2410a62dce07)

Example:

![usedebounce and useState combine](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/ae977ce8-8430-45fc-a35e-7e1f1c4036e7)



#### 3) `useCustomRefetch`

The concept of refetch in React Query is a feature used to re-pull data


![useRefetch](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/d14463d5-1d88-4503-8f72-7fec9378beec)

Example:

![refetch example](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/769a8a7d-2d28-4d29-a2e8-abc3731a19a1)



#### 4) `useCustomLocaleStorage`

useCustomLocaleStorage is a feature that allows JavaScript sites and applications to save key/value pairs in a web browser without an expiry date.


![useLocaleStorage](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/2301a7ff-347f-4b51-9155-955070db6171)



#### 5)  `useCustomSelector`

useCustomSelector is a hook used in React applications to pull and use data from the Redux store. This hook allows functional components to pull specific data from the Redux store and allows the component to re-render when that data is updated

![useSelector](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/f8ced46e-e1c1-4b81-83ad-8c8d51c42e2c)

Example:

![useSelector example](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/b022409b-e307-4361-b826-602a5c0577de)


#### 6)  `useCustomDispatch`

useCustomDispatch is a hook used with React Redux. This hook allows functional components to send actions to the Redux store. That is, it allows components to trigger state changes


![dispatch](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/c1d1d84e-fc34-40f1-a163-9ee720075407)

Example:

![actions for dispatch](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/c201c9c3-366b-4124-94c5-84f89cef5115)

![dispatch example](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/1e16de8d-f9c5-466a-9227-575109906086)


#### 7)  `useCustomAuth`

Checks whether the user is logged in or not

![useCustomAuth](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/c1ff0b09-82d4-4801-84c1-17974cf28180)



#### 8)  `useCustomRouter`

Hook used for navigating between pages

![use router](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/9753f7b7-3150-44ad-bf9c-fa2073ba1919)


#### 8)  `useCustomMediaQuery`


Hook used for detected screen size


![media query](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/17538b93-edcf-430d-9039-fa5f84aa039f)


Example:

![media query example](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/1c705a08-aac4-46e5-96ff-30c38df826e7)


#### 8)  `useCustomScroll`


Hook used for detected screen scroll x and y 

![scrooling](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/f18a5cb3-4773-4460-9ade-702ffcde011a)

Example:

![scrooling example](https://github.com/thekinv21/useful-custom-hooks/assets/92122363/47899633-cf9e-436b-93da-12772a7b06f8)


