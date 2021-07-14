Feature: Juliemr Calculator test
@smoke
Scenario: Addition test with tag
    When I enter inputs as "2" and "1"
    And I select operator "-"
    And I click on go button
    Then I verify result is "1"



