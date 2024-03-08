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
import { useTranslation } from "../../hooks/useTranslation";

export const Timeline = () => {
  const [translate] = useTranslation();

  const steps = [
    {
      title: translate("Birth", "birth"),
      description: translate("Born on 16,April 1995", "birthDescription"),
      icon: "🐣",
    },
    {
      title: translate("Schooling", "schooling"),
      description: translate(
        "Finished high school on 2012 from Nobel matriculation school",
        "schoolingDescription"
      ),
      icon: "🧑🏽‍🏫",
    },
    {
      title: translate("Under graduation", "underGrad"),
      description: translate(
        "Graduated on 2016 from Bharath university in chennai",
        "underGradDescription"
      ),
      icon: "🎓",
    },
    {
      title: translate("Masters", "masters"),
      description: translate(
        "Graduated on 2019 from ISEP in Paris",
        "mastersDescription"
      ),
      icon: "👨🏽‍🎓",
    },
    {
      title: translate("Internship", "internship"),
      description: translate(
        "6 months internship in Flaminem a Fintech company",
        "internshipDescription"
      ),
      icon: "🏋️",
    },
    {
      title: translate("Fist Job (2021)", "firstJob"),
      description: translate(
        "1 year 2 months in Sievable a Web3 based search engine",
        "firstJobDescription"
      ),
      icon: "🤹🏽‍♂️",
    },
    {
      title: translate("Current Job (2022)", "currentJob"),
      description: translate(
        "Currently working in Notice a no-code content management platform",
        "currentJobDescription"
      ),
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
