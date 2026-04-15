package com.example.mybignumber_web.controller;

import com.example.mybignumber.MyBigNumber;
import com.example.mybignumber.SumResult;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BigNumberController {

    private final MyBigNumber myBigNumber = new MyBigNumber();

    @GetMapping("/")
    public String showForm(Model model) {
        model.addAttribute("stn1", "");
        model.addAttribute("stn2", "");
        model.addAttribute("hasResult", false);
        return "index";
    }

    @PostMapping("/calculate")
    public String calculate(
            @RequestParam("stn1") String stn1,
            @RequestParam("stn2") String stn2,
            Model model) {

        stn1 = stn1.trim();
        stn2 = stn2.trim();

        if (stn1.isEmpty() || stn2.isEmpty()) {
            model.addAttribute("error", "Vui lòng nhập cả 2 số!");
            model.addAttribute("stn1", stn1);
            model.addAttribute("stn2", stn2);
            model.addAttribute("hasResult", false);
            return "index";
        }

        if (!stn1.matches("\\d+") || !stn2.matches("\\d+")) {
            model.addAttribute("error", "Chỉ được nhập chữ số 0-9!");
            model.addAttribute("stn1", stn1);
            model.addAttribute("stn2", stn2);
            model.addAttribute("hasResult", false);
            return "index";
        }

        SumResult sumResult = myBigNumber.sum(stn1, stn2);

        model.addAttribute("stn1", stn1);
        model.addAttribute("stn2", stn2);
        model.addAttribute("result", sumResult.getResult());
        model.addAttribute("steps", sumResult.getSteps());
        model.addAttribute("hasResult", true);

        return "index";
    }
}