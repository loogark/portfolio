import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

export const Timeline = () => {
  const steps = [
    { title: "Birth", description: "Born on 16,April 1995", icon: "🐣" },
    {
      title: "Schooling",
      description:
        "Finished high school on 2012 from Nobel matriculation school",
      icon: "🧑🏽‍🏫",
    },
    {
      title: "Under graduation",
      description: "Graduated on 2016 from Bharath university in chennai",
      icon: "🎓",
    },
    {
      title: "Masters",
      description: "Graduated on 2019 from ISEP in Paris",
      icon: "👨🏽‍🎓",
    },
    {
      title: "Internship",
      description: "6 months internship in Flaminem a Fintech company",
      icon: "🏋️",
    },
    {
      title: "Fist Job (2021)",
      description: "1 year 2 months in Sievable a Web3 based search engine",
      icon: "🤹🏽‍♂️",
    },
    {
      title: "Current Job (2022)",
      description:
        "Currently working in Notice a no-code content management platform",
      icon: "👨🏽‍💻",
    },
  ];

  const { activeStep } = useSteps({
    index: 5,
    count: steps.length,
  });
  return (
    <Stepper
      index={activeStep}
      orientation='vertical'
      height='100%'
      gap='0'
      w={"fit-content"}
      mb={"64px"}
      size={{ base: "sm", md: "lg" }}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={step.icon || <StepNumber />}
              incomplete={step.icon || <StepNumber />}
              active={step.icon || <StepNumber />}
            />
          </StepIndicator>

          <Box>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
